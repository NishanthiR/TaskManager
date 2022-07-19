const Admins = require('../../models/admin');

const getAdmins = function (req) {
    try {
        return Admins.find(req.query);
    } catch (e) {
        return e;
    }
}

const getAdminById = function (req) {
    try {
        return Admins.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

const saveAdmin = function (req) {
    try {
        var Admin = new Admins(req.body);
        return Admin.save();   
    } catch (e) {
        return e;
    }
}

const updateAdmin = function (req) {
    try {
        return Admins.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteAdmin = function (req) {
    try {
        return Admins.findByIdAndDelete(req.params.id)
    } catch (e) {
        return e;
    }
}

module.exports = {
    getAdmins,
    getAdminById,
    saveAdmin,
    updateAdmin,
    deleteAdmin
}