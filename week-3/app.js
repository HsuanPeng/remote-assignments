var express = require("express");
var app = express();
app.use(express.static('public'))

app.get("/", function (req, res) {
  res.send("Hello, My Server!");
});

var login = function (req, res, next) {
  let number = req.query.number;
  let _url = req.url;
  if (_url == "/getData") {
    next();
  } else if (_url !== "/getData" && number > 0) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
      sum = sum + i;
    }
    res.send(`You get ${sum}`);
  } else {
    res.send(`Wrong Parameter`);
  }
};

app.get("/getData", login, function (req, res) {
  res.send("Lack of Parameter");
});

//監聽port
var port = process.env.PORT || 3000;
app.listen(port);
