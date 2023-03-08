const multer = require("multer");
const { ObjectId } = require("mongodb");
const ErrorHandler = require("../errorhandler");
const path = require("path");

const upload = multer({
  limits: {
    fileSize: 1000000000000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(mp4|avi|mov|wmv|flv|mkv|webm)$/)) {
      return cb(new ErrorHandler("Please upload a valid video file", 422));
    }
    cb(undefined, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.resolve(__dirname, "../../../" + "public/videos/shortClips")
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

      if (req.params.id) {
        req.body.clip =
          req.params.id +
          "--" +
          filename +
          `.${file.mimetype.split("/").pop()}`;

        cb(null, req.body.clip);
      } else {
        req.body._id = new ObjectId();
        req.body.clip =
          req.body._id.toString() +
          "--" +
          filename +
          `.${file.mimetype.split("/").pop()}`;

        cb(null, req.body.clip);
      }
    },
    onerror: (err, next) => {
      console.log(err);
      next();
    },
  }),
});

module.exports = upload;
