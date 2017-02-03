const express = require('express');
const router = express.Router();
const multer = require('multer');

/* Uploaded images stored in a given directory with extensions */
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './webserver/images')
    },
    filename: function(req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '_' + Date.now() + '.' + extension)
        console.log(Date.now());
    }
});
const upload = multer({storage: storage});
/* POST to upload the images. */
router.post('/upload', upload.any('IMG'), function(req, res) {
    console.log('save');
    console.log(req.file);
    res.end(req.file);
});
module.exports = router;
