import { Employee } from '../models/employee.js'
import { Employees } from '../models/profile.js'

function index(req, res) {
  Employees.find({})
  .then(Employees => {
    res.render('employees/index',{
      title: 'All Employees',
      employees,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newEmployee(req, res) {
  res.render('employees/new', {
    title: 'Add Employee'
  })
}

function create(req, res) {
  req.body.owner = req.user.prfile_id
  Employee.create(req.body)
  .then(emplyees => {
    res.redirect(`/employees/${corgi._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/employees/new')
  })
}

function show(req, res) {
  Employee.findById(req.params.id)
  .populate('employer')
  .then(employee => {
    res.render('employees/show',{
      title: 'Employee Details',
      employees, 
    })
  })
  .catch(err => {
    res.redirect('/employees')
  })
}

function edit(req, res) {
  Employee.findById(req.params.id)
  .then(employee => {
    res.render('employees/edit', {
      title: 'Edit Employee',
      employee,
    })
  })
  .catch(err => {
    res.redirect('/employees')
  })
}

function update(req, res){
  Employee.findByIdAndUpdate(req.params.id, req.body)
  .then(employee => {
    res.redirect(`/employee/${entry._id}`)
  })
  .catch(err => {
    res.redirect('/employees')
  })
}

function deleteEmployee(req, res){
  Employee.findByIdAndDelete(req.params.id)
  .then(employee => {
    res.redirect('/employees')
  })
  .catch(err => {
    res.redirect('/employees')
  })
}

function createNote(req, res){
  req.body.employeeId = req.user.profile._id
  Employee.findById(req.params.id)
  .then(entry => {
    employee.note.push(req.body)
    note.save()
    res.redirect(`/employees/${employee._id}`)
  })
  .catch(err => {
    res.redirect('/employees')
  })
}


export {
  index, 
  newEmployee as new,
  create,
  show,
  edit,
  update,
  deleteEmployee as delete,c

}