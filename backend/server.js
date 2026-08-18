import express from "express";
import cors from "cors";
import 'dotenv/config'
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import companyRouter from "./routes/company.routes.js";
import jobRouter from "./routes/job.routes.js";
import applicationRouter from "./routes/application.routes.js";
import interviewRouter from "./routes/interview.routes.js";
import savedRouter from "./routes/saved.routes.js";
import inquiryRouter from "./routes/inquiry.routes.js";


const PORT = 5000;
const app = express();

//DB
connectDB()

//Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));


//ROUTES   
app.use("/api/auth", authRouter );
app.use("/api/user", userRouter);
app.use("/api/company", companyRouter);
app.use("/api/job", jobRouter);
app.use("/api/application", applicationRouter);
app.use('/api/interview', interviewRouter);
app.use('/api/saved', savedRouter);
app.use('/api/inquiry', inquiryRouter);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(5000, '0.0.0.0', () => {
  console.log('Server running on port 5000')
})