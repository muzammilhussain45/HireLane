import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { senderVerificationEmail, sendForgotPasswordEmail } from "../utils/emailService.js";


//to register a user
export const register = async (req, res) => {
    try {
        console.log(req.body);
        
        const { name, email, password, role } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userRole = role || "user";
        const verificationOTP = Math.floor(100000 + Math.random() * 900000).toString();
        const verificationOTPExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        const user = await User.create({
            name, email,
            password: hashedPassword,
            role: userRole,
            verificationOTP,
            verificationOTPExpires
        });

        //to send verification email
        try {
            await senderVerificationEmail(email, name, verificationOTP);
        } catch (emailError) {
            console.error("Error sending verification email:", emailError);
            return res.status(500).json({ success: false, message: "Failed to send verification email" });
        }

        res.status(201).json({
            success: true, message: "User registered successfully. Please check your email for the 6-digit verification code.",
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                isVerified: false
            },
        });


    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


// to login a user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        if (!user.isVerified) {
            return res.status(400).json({ success: false, message: "Please verify your email before logging in." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(200).json({
            success: true, message: "Login successful",
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,

            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


// to verify email
export const verifyEmail = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({ success: false, message: "Email and OTP are required" });
        }

        const user = await User.findOne({
            email,
            verificationOTP: otp,
            verificationOTPExpires: { $gt: new Date() } // Check if OTP is not expired
        });


         if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
        }

        user.isVerified = true;
        user.verificationOTP = undefined;
        user.verificationOTPExpires = undefined;
        await user.save();

        res.status(200).json({ success: true, message: "Email verified successfully" });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// if user forgets password, send OTP to email for reset password
export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, message: "Email is required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        const resetOTP = Math.floor(100000 + Math.random() * 900000).toString();
        const resetOTPExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        user.resetPasswordOTP = resetOTP;
        user.resetPasswordOTPExpires = resetOTPExpires;
        await user.save();

        try {
            await sendForgotPasswordEmail(email, user.name, resetOTP);
        } catch (error) {
            console.error("Error sending forgot password email:", error);
        }

        res.status(200).json({ success: true, message: "OTP sent to email for password reset" });

    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}


// to reset password using OTP
export const resetPassword = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;
        if (!email || !otp || !newPassword) {
            return res.status(400).json({ success: false, message: "Email, OTP and new password are required" });
        }

        const user = await User.findOne({
            email,
            resetPasswordOTP: otp,
            resetPasswordOTPExpires: { $gt: new Date() } // Check if OTP is not expired

        })

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetPasswordOTP = undefined;
        user.resetPasswordOTPExpires = undefined;
        await user.save();

        res.status(200).json({ success: true, message: "Password reset successfully" });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}