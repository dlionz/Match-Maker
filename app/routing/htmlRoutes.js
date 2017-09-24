var path = require("path");

module.exports = function(app) {

  app.use('/', function (req, res) {
     res.sendFile(path.join(__dirname, '/../public/home.html'));
  });

  app.use('/Dog', function (req, res) {
    console.log("yes");
     res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

};
