import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET home page. */
router.get('/', skillsCtrl.index)

export { 
  router
}
