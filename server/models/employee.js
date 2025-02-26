const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    location:String,
    workStatus:String,
    project:String,
});

module.exports = mongoose.model("Employee", EmployeeSchema);