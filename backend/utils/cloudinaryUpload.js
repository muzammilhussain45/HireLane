import cloudinary from "../config/cloudinary.js";

export const uploadToCloudinary = (
    fileBuffer,
    folderName,
    resourceType,
    publicId = null
) => {
    return new Promise((resolve, reject) => {
        const options = {
            folder: folderName,
            resource_type: resourceType,
            type: "upload",
            access_mode: "public",
            use_filename: true,
            unique_filename: true,
        };

        if (publicId) {
            if (resourceType === "raw") {
                options.public_id = publicId;
            } else {
                options.public_id = publicId.includes(".")
                    ? publicId.split(".").slice(0, -1).join(".")
                    : publicId;
            }
        } // <-- Added missing closing brace here

        const uploadStream = cloudinary.uploader.upload_stream(
            options,
            (error, result) => {
                if (error) {
                    console.log("Error uploading to Cloudinary:", error);
                    return reject(error);
                }
                console.log("Cloudinary upload result:", result);
                resolve({
                    secure_url: result.secure_url,
                    public_id: result.public_id,
                });
            }
        );

        uploadStream.end(fileBuffer);
    });
};