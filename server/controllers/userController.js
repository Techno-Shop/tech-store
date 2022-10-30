const Users = require('../database/userModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



async function register(req, res) {
    try {
        const { username, role, email, password, imageUrl } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        await Users.create({ username, role, email, password: hashedPassword, imageUrl });
        res.status(201).json({ message: "user added successfully" })
    } catch (err) {
        console.log(err.message);
        res.status(401).json({ message: "email already in use, please try another email address" })
    }
}


async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });

        if (!user) return res.status(404).json({status:"err" ,message: "email not found!! please enter your exact email address or you can make a new one" })

        const isMatched = bcrypt.compareSync(password, user.password);
        if (!isMatched ) return res.status(404).json({status:"err", message: "wrong password" })
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET_jwt_code);
        const options = {
            expires: new Date(exp),
           
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        }
        res.cookie("authorization", token, options);
        res.status(201).json({ status: " success", token, user ,message:`welcom ${user.username}` })
    } catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}


const logout = async (req, res) => {
    try {
        res.clearCookie("Authorization")
        res.status(200).json(" you just signed out, GOODBYE!! ");
    } catch (err) {
        return response.sendStatus(404)
    }
}

const checkAuth = (req, res) => {

    try {
        res.sendStatus(200);
    } catch (err) {
        return res.sendStatus(404);
    }
}


const getAllUsers = (req, res) => {
    Users.find({}, (err, results) => {
      err ? console.log(err) : res.send(results);
    });
  }

const getOneUser = (req, res) => {
    Users.findOne({ _id: req.params.id }, (err, results) => {
      err ? console.log(err) : res.send(results);
    });
  }









module.exports = {
    register,
    login,
    logout,
    checkAuth,
    getAllUsers,
    getOneUser
}