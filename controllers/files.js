const fileUpload = require('express-fileupload');
const fs = require("fs");
const path = require("path");
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

class File   {
  upload(fileName) {
    return (req, res, next) => {
      if (req.files && Object.keys(req.files).length !== 0) {
        file = req.files[fileName];
        uploadPath = config.path_to_photos + "photo.id" + req.body.id + "." + file.name;
        file.mv(uploadPath, (err) => {
          if (err) {
            return res.status(500).json({msg: "Unable to uplad photo."});
          }
          next(); 
        });
      } else {
        next(); 
      }
    }
  }

}

module.exports = () => {
  return new File();
}