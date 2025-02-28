import { Router } from "express";

import AuthnMiddleware from "../../middlewares/authn.js";

import * as KeybindingsController from '../../controllers/keybindings/keybindings.js';
import { validateGetKeybindings, validateUpdateKeybinding, validateCreateKeybinding } from '../../validators/keybindings.js'

const router = new Router();

router.post('/',
  validateCreateKeybinding,
  AuthnMiddleware.decode,
  KeybindingsController.createKeybinding)
router.put('/:keybinding_id',
  validateUpdateKeybinding,
  KeybindingsController.updateKeybinding)
router.use(AuthnMiddleware.authenticateToken)
router.get('/',
  validateGetKeybindings,
  KeybindingsController.getKeybindings)

router.delete('/:keybinding_id',
  KeybindingsController.deleteKeybinding)

export default router;
