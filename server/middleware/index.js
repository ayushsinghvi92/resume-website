var express = require('express');
var app = express();
var bodyParser = require('body-parser')

	let npmPath = __dirname + '../../node_modules';
	let browserPath = __dirname + '../../browser';

	app.use(express.static(npmPath));
	app.use(express.static(browserPath));

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json())

module.exports = app;