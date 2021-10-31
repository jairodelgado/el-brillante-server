const Builder = require("../controllers/builder.js");
const Authorization = require("../controllers/authorization.js")
const fs = require('fs');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

module.exports = (models) => {
  return Builder('/photos', models, models.Photo, Authorization(models.User).authenticated().hasRole(['Admin']).produce())
          .list()
          .retreive()
          .create()
          .update()
          .filterBy({by: ['ItemId']})
          .filterBy({by: ['StoreId']})
          .filterBy({by: ['ProductId']})
          .delete()
          .produce()
          .post('/picture/:id', upload.single('photo'), (req, res) => {
            if (req.file) {
              file = req.file;
              fs.renameSync(file.path, 'uploads/photo.' + req.params.id);
              res.status(200).json({msg: "Picture received."});
            } else {
              res.status(404).json({msg: "No picture received."});
            }
          })
}