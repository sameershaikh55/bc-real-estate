const multer = require("multer");
const { ObjectId } = require("mongodb");
const ErrorHandler = require("../errorhandler");
const path = require("path");

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|bmp|tiff|webp)$/)) {
      return cb(new ErrorHandler("Please upload a valid image file", 422));
    }
    cb(undefined, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(
        null,
        path.resolve(__dirname, "../../../" + "public/images/testimonials")
      );
    },
    filename: (req, file, cb) => {
      if (req.params.id) {
        req.body.personImage =
          req.params.id + `.${file.mimetype.split("/").pop()}`;

        cb(null, req.body.personImage);
      } else {
        req.body._id = new ObjectId();
        req.body.personImage =
          req.body._id.toString() + `.${file.mimetype.split("/").pop()}`;

        cb(null, req.body.personImage);
      }
    },
    onerror: (err, next) => {
      console.log(err);
      next();
    },
  }),
});

module.exports = upload;
