const Users = require('../database/userModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



async function register(req, res) {
    try {
        // get email and psw word
        const { username, role, email, password, imageUrl } = req.body;
        //hashing the password
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
        if (!user) return res.status(404).json({ message: "email not found!! please enter your exact email address or you can make a new one" })

        const isMatched = bcrypt.compareSync(password, user.password);
        if (!user) return response.status(404).json({ message: "wrong password" })
        // create a jwt token
        // please visit (https://www.rfc-editor.org/rfc/rfc7519) for more info 
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET_jwt_code);
        // take a look here (https://github.com/jshttp/cookie) so you can understand the diffrent options that can help you to Set the cookie 
        // Authorization : cookie name  / token is the value / option
        const options = {
            expires: new Date(exp),
            // httpOnly make only the browser & our server can read the cookie
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        }
        res.cookie("authorization", token, options);
        // send it
        res.status(201).json({ message: " welcome", token, user })
    } catch (err) {
        console.log(err);
        res.status(404).json("error")
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