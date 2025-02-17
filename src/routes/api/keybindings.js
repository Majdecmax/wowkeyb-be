import { Router } from "express";

import AuthnMiddleware from "../../middlewares/authn.js";

import * as KeybindingsController from '../../controllers/keybindings/keybindings.js';
import { validateGetKeybindings, validateSaveKeybinding, validateCreateKeybinding } from '../../validators/keybindings.js'

const router = new Router();

router.post('/',
  validateCreateKeybinding,
  KeybindingsController.createKeybinding)
  .use(AuthnMiddleware.authenticateToken)
router.get('/',
  validateGetKeybindings,
  KeybindingsController.getKeybindings)
router.put('/',
  validateSaveKeybinding,
  KeybindingsController.saveKeybinding)

export default router;
