const apiRoutes = function(app) {
    // api routes
    app.use('/api/users', require('./api/users'));
    app.use('/api/tasks', require('./api/tasks'));

    //hbs routes
    app.use('/users', require('./hbsRoutes/users'));          //index.js called
    app.use('/tasks', require('./hbsRoutes/tasks'));          //index.js called
}

module.exports = {
    apiRoutes
}