const express = require('express')
const Employee = require ('../models/employee')
const router = express.Router();


router.get("/", async (req,res)=>{
    const employees = await Employee.find();
    res.json(employees);
});


router.post('/', async (req,res)=>{
    const newEmployee = new Employee(req.body);
    await newEmployee.save()
    res.json(newEmployee)
});

module.exports = router;