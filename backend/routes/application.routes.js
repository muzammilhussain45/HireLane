import express from "express";
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";
import { applyjob, getApplicants, getUserApplications } from "../controllers/application.controller.js";





const applicationRouter = express.Router();

applicationRouter.post('/apply/:id', authMiddleware,applyjob);

applicationRouter.get('/:id/applicants', authMiddleware, authorize("admin"), getApplicants);
applicationRouter.get('/user', authMiddleware, getUserApplications);

export default applicationRouter;