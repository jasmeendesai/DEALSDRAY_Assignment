const Login = require("../model/login")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const {SECRET_KEY} = process.env


const register = async(req, res) =>{
    try {
        const {f_userName, f_Pwd, f_Name, f_Email} = req.body
        
        const isAdminExit = await Login.findOne({f_userName : f_userName})

        if(isAdminExit) {
            return res.status(400).send("Admin is already registered")
        }
        
            // HASH PASSWORD
            const salt = 10;
            const hashPassword = await bcrypt.hash(password, salt);

            const user = await User.create({
                f_userName : f_userName,
                f_Pwd : hashPassword,
                f_Name :f_Name,
                f_Email : f_Email
            })

            return res.status(200).send("Admin is registered!")  
    } catch (error) {
        return res.status(500).send(error.message )
    }
}



const login = async(req, res) =>{
try {
        const {f_userName, f_Pwd} = req.body

        // CHECK USER IF ALREADY EXIST
        const admin =  await Login.findOne({f_userName : f_userName});
        if(!admin) return res.status(404).send("User not found");

        // CHECK PASSWORD CORRECT
        const validPassword = await bcrypt.compare(f_Pwd, admin.password)

        if(!validPassword) return res.status(400).json("Wrong Password")

        // jwt 
        const token = jwt.sign({ userId: admin._id, exp: 7560606060 }, SECRET_KEY)

        const {__v, createdAt, updatedAt, password, ...other} = admin._doc
        
        return res.cookie("accessToken", token, {
            httpOnly : true,
        }).status(200).json(other)

    } catch (error) {
        return res.status(500).send(error.message )
    }
}

const logout = async(req, res) =>{
try {
    res.clearCookie("accessToken", {
        secure : "true",
        sameSite : "none"
    }).status(200).json("User has been logged out!")
    } catch (error) {
        return res.status(500).send(error.message )
    }
}

module.exports = {login, register, logout}