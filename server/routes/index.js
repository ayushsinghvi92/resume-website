
var path = require('path')
var router = require('express').Router();

let indexHtmlPath = path.join(__dirname,'../../browser/index.html')
let browserPath = path.join(__dirname, '../../browser/');

router.use('/', function (req, res, next) {
	res.sendFile(indexHtmlPath)
})

module.exports = router;