const multer = require("multer");

const Upload = () => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            let directory = '';
            if (file.mimetype.startsWith("image/")) {
                directory = "images";
            } else if (file.mimetype === "text/csv") {
                directory = "csv";
            } else if (file.mimetype.startsWith("audio/")) {
                directory = "audios";
            } else if (file.mimetype.startsWith("video/")) {
                directory = "videos";
            } else if (isDocument(file.originalname)) {
                directory = "documents";
            }
            cb(null, `public/${directory}`);
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
        },
    });

    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 1024 * 1024 * 20, // 20MB file size limit
        },
    });

    return upload;
};

const isDocument = (filename) => {
    const extension = filename.split(".").pop().toLowerCase();
    return extension === "pdf";
};

let upload = Upload();
module.exports = upload;