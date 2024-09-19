import multer from "multer";

const multerStorageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    //we can use post-pre fix
    //can use date-time stamp or uuid
    const postFix = Date.now() + "_" + file.originalname
    cb(null, postFix)
  },
});

export const uploadFile = multer({
  storage: multerStorageConfig
});