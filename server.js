var express = require('express'),
  mongoose = require('mongoose'),
  app = express(),
  http = require('http').Server(app),
  io = require('socket.io')(http);



app.use(express.static(__dirname + '/public'));

