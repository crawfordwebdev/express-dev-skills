import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET home page. */
router.get('/', skillsCtrl.index)

// GET -- localhost:3000/todos/new
router.get('/new', skillsCtrl.new)

// POST -- localhost:3000/todos
router.post('/', skillsCtrl.create)

export { 
  router
}
