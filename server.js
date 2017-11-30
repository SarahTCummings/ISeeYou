// Server.js. Must have the top two lines, always.
var express = require("express");
var app = express();


app.get("/getdata", function(req, res) {
  console.log(req.query.email);
  var email = req.query.email;


 // url: "https://api.fullcontact.com/v2/person.json?email=" + email
 // headers: {"X-FullContact-APIKey": "aa1febea3072edd9"}
 request(options, function(error, response, body) {
   console.log(body);
   res.send("hi");
   options : {
     url: "https://api.fullcontact.com/v2/person.json?email=" + email
     headers: {"X-FullContact-APIKey": "aa1febea3072edd9"}
   }
 })
})


var server = app.listen(5000, function () {
 var port = server.address().port;
 console.log("App's server listening at http://localhost:%s", port);
});
