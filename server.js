// Server.js. Must have the top two lines, always.
var express = require("express");
var app = express();
var request = require("request");

app.use(express.static('client/build'));


app.get("/getdata", function(req, res) {
  console.log(req.query.email);
  var email = req.query.email;
  var options = {
    url: "https://api.fullcontact.com/v2/person.json?email=" + email,
    headers: {
      "X-FullContact-APIKey": "9cd9e31ce23c4ec7",
      json: true
    }
  }

 request(options, function(error, response, body) {
   console.log(body);
   res.send(JSON.parse(body));
 });
});

var port = process.env.PORT || 5000;
var server = app.listen(port, function () {
 var port = server.address().port;
 console.log("App's server listening at http://localhost:%s", port);
});
