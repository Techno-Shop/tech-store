const Users = require('../database/userModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const ValidateRegister = require("../validation/Register");
const ValidateLogin = require("../validation/Login");
const userModels = require('../database/userModels');



async function register(req, res) {
    const { errors, isValid } = ValidateRegister(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            Users.findOne({ email: req.body.email }).then(async (exist) => {
                if (exist) {
                    error.email = "user already exists";
                } else {
                    const hashedPassword = bcrypt.hashSync(req.body.password, 10)// hashed password;
                    req.body.password = hashedPassword;
                    req.body.role = "USER";
                    await Users.create(req.body);
                    res.status(200).json({ message: "success" });
                }
            })
        }
    } catch (err) {
        res.status(404).json(err.message);
    }
}


async function login(req, res) {
    const { errors, isValid } = ValidateLogin(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
            Users.findOne({ email: req.body.email })
                .then(user => {
                    if (!user) {
                        errors.email = "user not found";
                        res.status(404).json(errors)
                    } else {
                        bcrypt.compare(req.body.password, user.password)
                            .then(isMatch => {
                                if (!isMatch) {
                                    errors.password = "worong password";
                                    res.status(404).json(errors)
                                } else {
                                    var token = jwt.sign({
                                        id: userModels._id,
                                        username: user.username,
                                        email: user.email,
                                        password: user.password,
                                        role: user.role,
                                        imageUrl: user.imageUrl
                                    }, process.env.PRIVATE_KEY, { expiresIn: '2h' });
                                    res.status(200).json({
                                        message: "success",
                                        token: "Bearer" + token
                                    })
                                }
                            })
                    }
                })
        }
    } catch (error) {
        res.status(404).json(error.message);
    }
}

// if user is logged in
const Test = (req, res) => {
    res.send("welcome")
}
// id admin is logged in
const Admin = (req, res) => {
    res.send("welcome admin")
}

const logout = async (req, res) => {
    try {
        res.clearCookie("Authorization")
        res.status(200).json(" you just signed out, GOODBYE!! ");
    } catch (err) {
        return response.sendStatus(400)
    }
}

const checkAuth = (req, res) => {

    try {
        res.sendStatus(200);
    } catch (err) {
        return res.sendStatus(400);
    }
}


module.exports = {
    register,
    login,
    Test,
    Admin,
    logout,
    checkAuth,
}