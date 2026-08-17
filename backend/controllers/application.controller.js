import Application from "../models/application.model.js";
import Job from "../models/job.model.js";
import User from "../models/user.model.js";


//user to apply for a job
export const applyjob = async (req, res) => {
    try {
        const jobId = req.params.id;
        const userId = req.user.id;

        if (!jobId) {
            return res.status(400).json({ success: false, message: "Job ID is required" });
        }

        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found" });
        }


        //check if user's profile is completed or not
        const user = await User.findById(userId);
        if (!user || !user.resume || !user.phone) {
            return res.status(404).json({ success: false, message: "User profile is not completed" });
        }

        //check if user has already applied for the job
        const existingApplication = await Application.findOne({ job: jobId, user: userId });
        if (existingApplication) {
            return res.status(400).json({ success: false, message: "You have already applied for this job" });
        }

        const newApplication = new Application({
            job: jobId,
            user: userId,
        });

        await newApplication.save();

        return res.status(200).json({ success: true, message: "Job application submitted successfully" });


    } catch (error) {
        console.error("Error applying for job:", error);
        return res.status(500).json({ success: false, message: error.message || "Server error" });
    }
}

// get All applications for a  job(admin panel)

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found" });
        }

        const applications = await Application.find({ job: jobId }).populate({
            path: "user",
            select: "name email phone resume",
        }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            jobName: job.roleName,
            applicants: applications.filter(app => app.user).map(app => ({
                applicationId: app._id,
                ...app.user._doc,
                appliedDate: app.createdAt,
                resume: app.user.resume || ""
            }))
        })


    } catch (error) {
        console.error("Error fetching applicants:", error);
        return res.status(500).json({ success: false, message: error.message || "Server error" });
    }
}


// get all job applications for a user
export const getUserApplications = async (req, res) => {
    try {
        const userId = req.user.id;
        const applications = await Application.find({ user: userId }).populate("job").sort({ createdAt: -1 });

        const validApplications = applications.filter(app => app.job !== null)

        return res.status(200).json({ success: true, applications: validApplications });

    } catch (error) {
        console.error("Error fetching user applications:", error);
        return res.status(500).json({ success: false, message: error.message || "Server error" });
    }
}
