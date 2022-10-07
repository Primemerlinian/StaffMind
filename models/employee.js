import mongoose from "mongoose"

const Schema = mongoose.Schema

const employeeSchema  = new Schema ({ 
  name: {
    type: String, 
    required: true, 
  },
  title: {
    type: String,
    enum: ['Team Lead', 'Account Manager', 'Engineer', 'Consultant', 'Associate']
  },
  hireDate: {
    type: Date,
    required: true,
  },
  salary: {
    type: Number,
    min: 1, 
    max: 999999,
    required: true,
  },
  emergencyContact: {
    type: String, 
    required: true,
  },
  timestamps: true,
})
const Employee = mongoose.model('Employee', employeeSchema)

export {
  Employee
}