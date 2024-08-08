import { Router } from "express";

import * as UserController from '../../controllers/user/users.js';
import { validateGetUser, validateSaveSetting } from '../../validators/users.js'

const router = new Router();

router.get('/',
  validateGetUser,
  UserController.getUser)
router.put('/setting',
  validateSaveSetting,
  UserController.saveSetting)

export default router;
