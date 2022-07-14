require('./db/mongoose');
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes');

const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.use(express.static(publicDirPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('login');
});

app.get('/reg', function (req, res) {
  res.render('reg');
});

routes.apiRoutes(app);

app.listen(4000, function () {
  console.log("The server is up on port 4000")
});