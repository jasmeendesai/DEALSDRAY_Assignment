const express = require('express')

const {createEmployee, getEmployee, getAllEmployee, updateEmployee} = require('../controller/Employee')
const { Authentication } = require('../middleware/middleware')


const router = express.Router()

router.post("/", Authentication, createEmployee)
router.get("/:employeeId", getEmployee)
router.get("/", getAllEmployee)
router.put("/:employeeId", Authentication, updateEmployee)

module.exports = router