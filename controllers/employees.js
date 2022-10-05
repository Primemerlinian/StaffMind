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

}

export {
  index, 
  newEmployee as new,
  create
}