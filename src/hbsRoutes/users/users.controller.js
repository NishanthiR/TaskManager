const userService = require('../../api/users/users.service');

const getUsers = function (req, res) {
    userService.getUsers(req).then(function (users) {
        // console.log('users', user);
        res.render('users', {
            title: 'Users',
            users
        });
    }).catch(function (error) {
        res.status(500).send('Unable to render');
    })

}

const addUser = function (req, res) {
    res.render('addUser', {
        title: "Add User",
        btnName: "Save"
    });

}

const editUser = function (req, res) {
    userService.getUserById(req).then(function (user) {
        console.log(req.params.id);
        res.render('addUser', {
            title: "Edit User",
            btnName: "Update",
            user
        });
    }).catch(function (error) {
        res.status(500).send("Unable to save");
    })
}


module.exports = {
    getUsers,
    addUser,
    editUser
}