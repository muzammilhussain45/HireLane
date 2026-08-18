import express from "express";
import { addInterviewCompany, addInterviewRole, deleteInterviewCompany, deleteInterviewRole, getInterviewCompanies, getInterviewQuestionsByCompany, getInterviewRoles, getQuestionsByRole, updateInterviewCompany, updateInterviewRole } from "../controllers/interview.controller.js";
import { authMiddleware, authorize } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

const interviewRouter = express.Router();

interviewRouter.get('/roles', getInterviewRoles);
interviewRouter.get('/roles/:roleId', getQuestionsByRole);
interviewRouter.post('/roles',authMiddleware , authorize('admin'),upload.fields([{ name: 'imageFile', maxCount: 1 }, { name: 'csvFile', maxCount: 1 }]),addInterviewRole);
interviewRouter.put('/roles/:roleId',authMiddleware , authorize('admin'),upload.fields([{ name: 'imageFile', maxCount: 1 }, { name: 'csvFile', maxCount: 1 }]), updateInterviewRole);
interviewRouter.delete('/roles/:roleId',authMiddleware , authorize('admin'), deleteInterviewRole);

// company 

interviewRouter.get('/companies', getInterviewCompanies);
interviewRouter.get('/company/:companyId', getInterviewQuestionsByCompany);
interviewRouter.post('/',authMiddleware , authorize('admin'),upload.fields([{ name: 'imageFile', maxCount: 1 }, { name: 'csvFile', maxCount: 1 }]),addInterviewCompany);
interviewRouter.put('/:companyId',authMiddleware , authorize('admin'),upload.fields([{ name: 'imageFile', maxCount: 1 }, { name: 'csvFile', maxCount: 1 }]), updateInterviewCompany); 
interviewRouter.delete('/:companyId',authMiddleware , authorize('admin'), deleteInterviewCompany);

export default interviewRouter;