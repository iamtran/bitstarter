var express = require('express');
var app = express();
app.use(express.logger());

str = "Hello MCAT Buffer";
buf1 = new Buffer(str.length);

app.get('/', function(request, response) {
  response.send(buf1.toString("utf8", 0, buffer.length));
  //response.send('Hello MCAT! I CAN DO IT');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
