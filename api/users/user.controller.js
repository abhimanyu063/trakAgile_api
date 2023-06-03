const userService = require('./user.service');
const { HierarchyTree } = require('./user.common');

module.exports = {
    addUser: (req, res, next) => {
        try {
            const body = req.body;
            userService.addUser(body, (err, results) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    getUserById: (req, res, next) => {
        try {
            userService.getUserById(req.params.userId, (err, results) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    validateAndGetUser: (req, res, next) => {
        try {
            const body = req.body;
            if (body.userName.trim() == "" || body.password == "") {
                const error = new Error('empty credentials');
                return next(error);
            }
            userService.validateAndGetUser(body, (err, results) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    success: results === undefined ? 0 : 1,
                    data: results
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    validateAdminAndGetDetails: (req, res, next) => {
        try {
            const body = req.body;
            if (body.userName.trim() == "" || body.password == "") {
                const error = new Error('empty credentials');
                return next(error);
            }
            userService.validateAdminAndGetDetails(body, (err, results) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    success: results === undefined ? 0 : 1,
                    data: results
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    changePassword: (req, res, next) => {
        try {
            const body = req.body;
            userService.changePassword(body, (err, results) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    success: (results !== undefined && results.affectedRows > 0) ? 1 : 0,
                    data: results
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    getUsers: (req, res, next) => {
        try {
            userService.getUsers(req.params.userId, (err, results) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    success: 1,
                    data: results,
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    forgetPassword: (req, res, next) => {
        try {
            userService.forgetPassword(req.params.userName, (err, results) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    success: results === undefined ? 0 : 1,
                    data: results
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    validateUserNameEmailAndMobile: (req, res, next) => {
        try {
            const body = req.body;
            userService.validateUserNameEmailAndMobile(body, (err, results) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    success: results === undefined ? 0 : 1,
                    data: results
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    getOnlineUsers: (req, res, next) => {
        try {
            userService.getOnlineUsers(req.params.supervisorId,(err, results) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    getSupervisor: (req, res, next) => {
        try {
            userService.getSupervisor((err, results) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    },
    getUserHierarchy: (req, res, next) => {
        try {
            userService.getUserHierarchy((err, results) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({
                    success: 1,
                    data: HierarchyTree(results)
                });
            });
        }
        catch (error) {
            console.log('Error ', error)
        }
    }
}

