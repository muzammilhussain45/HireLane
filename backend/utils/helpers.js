import { uploadToCloudinary } from "./cloudinaryUpload.js";

//upload files

export const uploadFiles = async (files, config) => {
    const results = {};

    if (!files) return result;

    for (const key in config) {
        if (files[key]) {
            const file = files[key][0];

            const uploadRes = await uploadToCloudinary(
                file.buffer,
                config[key].folder,
                config[key].type,
                file.originalname
            );

            results[key] = uploadRes.secure_url;
        }
    }

    return results;
}


// parse and format questions data

export const parseQuestions = (questionsdata, type, id, userId) => {
    const raw = typeof questionsdata === "string" ? JSON.parse(questionsdata) : questionsdata;
    const list = Array.isArray(raw) ? raw : raw ? [raw] : [];

    return list.map((q) => {
        let date = new Date(q.postDate);
        if (isNaN(date)) date = new Date();

        const keyPoints = Array.isArray(q.keyPoints)
            ? q.keyPoints
            : q.keyPoints != null && q.keyPoints !== ""
                ? [q.keyPoints]
                : [];

        return {
            ...(type === "company" && { company: id }),
            ...(type === "role" && { roleId: id }),
            question: q.question,
            answer: q.answer,
            keyPoints,
            postDate: date,
            createdBy: userId,
            askedBy: q.companies?.map((c) => ({
                companyName: c.name || "",
                dateAsked: c.date || "",
            })) || [],
        };
    });
}


// replace all questions

export const replaceQuestions = async (Model, filter, questions) => {
    await Model.deleteMany(filter);
    await Model.insertMany(questions);
}

// handle error
export const handleError = (res, err) => {
    return res.status(500).json({ success: false, message: err.message || "Server Error" });    
}