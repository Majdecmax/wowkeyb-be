
import { Router } from "express";

import AuthnMiddleware from '../middlewares/authn.js'

import AuthRouter from './api/auth.js'
import PingRouter from './api/ping.js'

import NavigationRouter from './api/navigation.js'
import AbiliyRouter from './api/ability.js'

import UserRouter from './api/user.js'

const router = new Router();
// https://wow.zamimg.com/images/wow/icons/large/inv_sword_48.jpg
//auth
router
  .use('/auth', AuthRouter)
  .use('/navigation', NavigationRouter)
  .use('/abilities', AbiliyRouter)

  .use(AuthnMiddleware.authenticateToken)

  .use(PingRouter)

  //user
  .use('/user', UserRouter)

export default router;
