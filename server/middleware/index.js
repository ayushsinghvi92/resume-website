const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const path = require('path')

const browserPath = path.join(__dirname, '../../browser/');
const npmPath = path.join(__dirname, '/../../node_modules');

	router.use(express.static(npmPath));
	router.use(express.static(browserPath));

	router.use(bodyParser.urlencoded({extended: true}));
	router.use(bodyParser.json())
	
module.exports = router 