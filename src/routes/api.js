
import { Router } from "express";

import AuthRouter from './api/auth.js'
import PingRouter from './api/ping.js'
import UserRouter from './api/user.js'
import NavigationRouter from './api/navigation.js'

import AuthnMiddleware from '../middlewares/authn.js'

const router = new Router();

//auth
router
  .use('/auth', AuthRouter)
  .use('/navigation', NavigationRouter)

  .use(AuthnMiddleware.authenticateToken)

  .use(PingRouter)

  //user
  .use('/user', UserRouter)

export default router;
