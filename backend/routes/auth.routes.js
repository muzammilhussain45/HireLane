import express from "express";
import { register, login, forgotPassword, resetPassword, verifyEmail } from "../controllers/auth.controller.js";


const authRouter = express.Router();


authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/verify-email", verifyEmail);

export default authRouter;