const express = require('express');
const bodyParser = require('body-parser');


var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

const apiRouter = express.Router();

apiRouter.post('/fileanalyse', upload.single('upfile'), (req, res, next) => {
  const file = req.file;
  
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error);
  }
  
  const fileName = file.originalname;
  const size = file.size;
  const type = file.mimetype;
  
  res.json({name: fileName, type: type, size: size})
})

module.exports = apiRouter;