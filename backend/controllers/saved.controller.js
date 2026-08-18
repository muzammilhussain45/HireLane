import User from '../models/user.model.js'

//toggle save job
export const toggleSaveJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        const userId = req.user.id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const isSaved = user.savedJobs.includes(jobId);
        if (isSaved) {
            user.savedJobs = user.savedJobs.filter((id) => id.toString() !== jobId); //unsave job
        } else {
            user.savedJobs.push(jobId); //save job
        }

        await user.save();

        return res.status(200).json({ success: true, message: isSaved ? 'Job unsaved' : 'Job saved' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}


// toggle save questions

export const toggleSaveQuestion = async (req, res) => {
    try {
        const {questionId}  = req.params;
        const {type} = req.query //either interview or role question
        const userId  = req.user.id;

         const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        let isSaved;
        let message;

        if(type === 'role'){
            isSaved = user.savedRoleQuestions.includes(questionId);
            if (isSaved) {
                user.savedRoleQuestions = user.savedRoleQuestions.filter((id) => id.toString() !== questionId); //unsave question
                message = 'Role question unsaved';
            } else {
                user.savedRoleQuestions.push(questionId); //save question
                message = 'Role question saved';
            }   
        }
        else{
            // deafult to interview question
            isSaved = user.savedInterviewQuestions.includes(questionId);
            if (isSaved) {
                user.savedInterviewQuestions = user.savedInterviewQuestions.filter((id) => id.toString() !== questionId); //unsave question
                message = 'Interview question unsaved';
            } else {
                user.savedInterviewQuestions.push(questionId); //save question
                message = 'Interview question saved';
            }
        }

        await user.save();

        return res.status(200).json({ success: true, message,
            savedInterviewQuestions: user.savedInterviewQuestions,
            savedRoleQuestions: user.savedRoleQuestions
        });


    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
} 

// to get all saved items

export const getSavedItems = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).populate('savedJobs').populate({
            path: 'savedInterviewQuestions',
            populate: {path: 'company'}
        }).populate({
            path: 'savedRoleQuestions',
            populate: {path: 'roleId'}
        });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        return res.status(200).json({ success: true, savedJobs: user.savedJobs, savedInterviewQuestions: user.savedInterviewQuestions, savedRoleQuestions: user.savedRoleQuestions });
    } catch (error) {
        return res.status(500).json({ success: false, message: `Internal server error ${error.message}` });
    }
}