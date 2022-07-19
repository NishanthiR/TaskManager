const service = require("./admin.service");

const getAdmins = function(req,res) {
    service.getAdmins(req).then(function (Admins) {
        res.status(200).send(Admins);
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

const getAdminById = function(req, res) {
    service.getAdminById(req).then(function(Admin) {
        res.status(200).send(Admin);
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

const  saveAdmin = function(req, res) {
    service.saveAdmin(req).then(function(Admin) {
        res.status(201).send("Admin saved successfully");
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

const updateAdmin = function(req, res) {
    service.updateAdmin(req).then(function(Admin) {
        res.status(201).send("Admin updated Successfully");
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

const deleteAdmin = function(req, res) {
    service.deleteAdmin(req).then(function(Admin) {
        res.status(200).send("Admin deleted Successfully");
    }).catch(function(e) {
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getAdmins,
    getAdminById,
    saveAdmin,
    updateAdmin,
    deleteAdmin
}