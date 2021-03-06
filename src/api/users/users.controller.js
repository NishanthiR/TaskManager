const service = require("./users.service");

const getUsers = function(req,res) {
    service.getUsers(req).then(function (users) {
        res.status(200).send(users);
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

const getUserById = function(req, res) {
    service.getUserById(req).then(function(user) {
        res.status(200).send(user);
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

const  saveUser = function(req, res) {
    service.saveUser(req).then(function(user) {
        res.status(201).send("Users saved successfully");
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

const updateUser = function(req, res) {
    service.updateUser(req).then(function(user) {
        res.status(201).send("User updated Successfully");
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

const deleteUser = function(req, res) {
    service.deleteUser(req).then(function(user) {
        res.status(200).send("User deleted Successfully");
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getUsers,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
}