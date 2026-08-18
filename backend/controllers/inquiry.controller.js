import Inquiry from "../models/inquiry.model.js";
import { sendAdminInquiryEmail } from "../utils/emailService.js";

// to submit an inquiry
export const submitInquiry = async (req, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields." });
    }

    const inquiry = await Inquiry.create({
      fullName,
      email,
      phone,
      subject,
      message,
    });

    try {
      await sendAdminInquiryEmail({
        fullName,
        email,
        phone,
        subject,
        message,
      });
    } catch (error) {
      console.error("Failed to send admin inquiry email:", error.message);
    }

    res
      .status(201)
      .json({
        succes: true,
        message: "Inquiry submitted successfully.",
        inquiry,
      });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
