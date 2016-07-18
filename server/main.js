var express = require('express');
var app = express();

let port = 8000;

app.use(require('./middleware'));
app.use(require('./routes'));

app.listen(port, function () {
	console.log("Magic Happens on Port:", port )
})

module.exports = app;