const userService = require('../../api/users/users.service');

const getUsers = function (req, res) {
    userService.getUsers(req).then(function(users) {
        // console.log('users', user);
        res.render('users', {
            title: 'Users',
            users
        });  
    }).catch(function(error) {
        res.status(500).send('Unable to render');
    })
    
}

const addUser = function (req, res) {
    res.render('addUser');
}

const editUser = function (req, res) {
    res.render('addUser');
}

module.exports = {
    getUsers,
    addUser,
    editUser
}