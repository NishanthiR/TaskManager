require('../db/mongoose');
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

const Users = require('../models/users');
const Tasks = require('../models/tasks');

app.use(express.static(publicDirPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CRUD operation for user table
app.get('/api/users', function(req, res) {
  Users.find().then(function(users) {
    res.status(200).send(users);
  }).catch(function(error) {
    res.status(500).send("Internal server error");
  })
})

app.post('/api/users', function(req, res) {
  console.log("request.body", req.body);
  var user = new Users(req.body);
  user.save().then(function(user){
    res.status(201).send('Users saved successfully');
  }).catch(function(error) {
    console.log(error);
    res.status(500).send('Internal server error');
  })
})

app.put('/api/users', function(req, res) {
  console.log("request param",)
  res.status(201).send('users updated successfully');
})

app.delete('/api/users', function(req, res) {
  users.findByIdAndDelete(req.params.id).then(function(){
    res.status(200).send('users deleted successfully');
  }).catch(function(error) {
    res.status(500).send('Internal server error');
  }) 
})

app.get('/api/tasks', function(req, res) {
  // Tasks.find().then(function(tasks) {
  //   res.status(200).send(tasks);
  // }).catch(function(error) {
    // res.status(500).send("Internal server error");
  // })
  res.status(200).send('Tasks added successfully');
})

app.post('/api/tasks', function(req, res) {
  // console.log("request.body", req.body);
  // var task = new Tasks(req.body);
  // task.save().then(function(task){
  res.status(201).send('Tasks saved successfully');
  // }).catch(function(error) {
  // console.log(error);
  // res.status(500).send('Internal server error');
  // })
})

app.put('/api/tasks', function(req, res) {
  res.status(201).send('users updated successfully');
})

app.delete('/api/tasks', function(req, res) {
  res.status(200).send('users deleted successfully');
})

app.get('/', function (req, res) {
  res.render('login');
});

app.get('/users/add', function (req, res) {
  res.render('addUser');
});

app.get('/users', function (req, res) {
  res.render('users');
});

app.get('/tasks', function (req, res) {
  res.render('tasks');
});

app.get('/tasks/add', function (req, res) {
  res.render('addTask');
});

app.get('/reg', function (req, res) {
  res.render('reg');
});

app.listen(3000, function(){
    console.log("The server is up on port 3000")
});