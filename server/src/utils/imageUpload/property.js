const multer = require("multer");
const ErrorHandler = require("../errorhandler");
const { ObjectId } = require("mongodb");
const path = require("path");

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new ErrorHandler("Please upload a valid image file", 422));
    }
    cb(undefined, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.resolve(__dirname, "../../../" + "public/images/properties")
      );
    },
    filename: (req, file, cb) => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const miliSeconds = String(now.getMilliseconds()).padStart(2, "0");
      const filename = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}-${miliSeconds}`;
      cb(
        null,
        new ObjectId().toString() +
          "--" +
          filename +
          `.${file.mimetype.split("/").pop()}`
      );
    },
    onerror: (err, next) => {
      console.log(err);
      next();
    },
  }),
});

module.exports = upload;
