var express = require('express');
var app = express();
app.use(express.logger());

str = "Hello MCAT Buffer";
buf1 = new Buffer(str.length);

//
var fs = require("fs");
	var fileName = "index.html";
	fs.exists(fileName, function(exists) {
	  if (exists) {
	    fs.stat(fileName, function(error, stats) {
	      fs.open(fileName, "r", function(error, fd) {
	        var buffer = new Buffer(stats.size);
	        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
	          //var data = buffer.toString("utf8", 0, buffer.length);
		  //var data = fs.readFileSync(fileName, "utf8");
		  var data = fs.readFileSync(fileName, "utf8");
                  app.get('/', function(request, response) {
                    response.send(data);
                  });
	          console.log(data);
	          fs.close(fd);
	        });
	      });
	    });
	  }
	});

//
//app.get('/', function(request, response) {
  //response.send(buf1.toString('utf-8', 0, buf1.length));
  //response.send('Hello MCAT! I CAN DO IT');
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
