var express = require('express')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic(__dirname, {'index': ['example.html']}))
app.listen(3000)
