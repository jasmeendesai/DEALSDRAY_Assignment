const Employee = require("../model/Employee")




const createEmployee = async(req, res) =>{
    try {
        const {f_Email} = req.body

        const isEmail = await Employee.findOne({ f_Email: f_Email })

        if (isEmail) {
            return res.status(400).send("email is already registered")
        }

        const createdData = await Employee.create(req.body)

        return res.status(201).json(createdData)

    } catch (error) {
        return res.status(500).send(error.message )
    }
}


const getEmployee = async(req, res) =>{
    try {
        const {employeeId} = req.params

        const employeeDetail = await Employee.findById(employeeId)

        return res.send(200).json(employeeDetail)
    } catch (error) {
        return res.status(500).send(error.message )
    }
}


const getAllEmployee = async(req, res) =>{
    try {
        
    } catch (error) {
        return res.status(500).send(error.message )
    }
}


const updateEmployee = async(req, res) =>{
    try {
        const {employeeId} = req.params
        const {f_Email} = req.body

        
        const isEmail = await Employee.findOne({ f_Email: f_Email })

        if (isEmail) {
            return res.status(400).send("email is already registered")
        }

        const updatedData = await Employee.findByIdAndUpdate(employeeId , req.body, { new: true })
        
        return res.status(200).send(updatedData)
        
    } catch (error) {
        return res.status(500).send(error.message )
    }
}


module.exports = {createEmployee, getEmployee, getAllEmployee, updateEmployee}