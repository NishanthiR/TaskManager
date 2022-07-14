const service = require("./Tasks.service");

const getTasks = function(req,res) {
    service.getTasks(req).then(function (Tasks) {
        res.status(200).send(Tasks);
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

const getTaskById = function(req, res) {
    service.getTaskById(req).then(function(Task) {
        res.status(200).send(Task);
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

const  saveTask = function(req, res) {
    service.saveTask(req).then(function(Task) {
        res.status(201).send("Tasks saved successfully");
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

const updateTask = function(req, res) {
    service.updateTask(req).then(function(Task) {
        res.status(201).send("Task updated Successfully");
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

const deleteTask = function(req, res) {
    service.deleteTask(req).then(function(Task) {
        res.status(200).send("Task deleted Successfully");
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getTasks,
    getTaskById,
    saveTask,
    updateTask,
    deleteTask
}