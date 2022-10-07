import { Router } from "express"
const router = Router()

import * as employeesCtrl from '../contollers/employees.js'
import { isLoggedIn } from '../middleware/middleware.js'


router.get('/', isLoggedIn, employeesCtrl.index)
router.get('/new', isLoggedIn, employeesCtrl.new)
router.get('/:id', isLoggedIn, employeesCtrl.show)
router.get('/:id/edit', isLoggedIn, employeesCtrl.edit)
router.post('/', isLoggedIn ,employeesCtrl.create)
router.post('/:id/comments', isLoggedIn, employeesCtrl.noteComment)
router.put('/:id', isLoggedIn, employeesCtrl.update)
router.delete('/:id', isLoggedIn, employeesCtrl.delete)
router.delete('/:id/notes/:noteId', isLoggedIn, employeesCtrl.deleteNote)

export {
  router
}