import { Router } from "express"
const router = Router()
import * as employeesCtrl from '../contollers/employees.js'

router.get('/', employeesCtrl.index)
router.get('/new', employeesCtrl.new)

export {
  router
}