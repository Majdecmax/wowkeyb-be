import { Router } from "express";

import AuthnMiddleware from "../../middlewares/authn.js";

import * as KeybindingsController from '../../controllers/keybindings/keybindings.js';
import { validateGetKeybindings, validateGetKeybinding, validateUpdateKeybinding, validateCreateKeybinding } from '../../validators/keybindings.js'

const router = new Router();

router.get('/',
  validateGetKeybindings,
  AuthnMiddleware.decode,
  KeybindingsController.getKeybindings)
router.get('/:keybinding_id',
  validateGetKeybinding,
  AuthnMiddleware.decode,
  KeybindingsController.getKeybinding)
router.post('/',
  validateCreateKeybinding,
  AuthnMiddleware.decode,
  KeybindingsController.createKeybinding)
router.put('/:keybinding_id',
  validateUpdateKeybinding,
  AuthnMiddleware.decode,
  KeybindingsController.updateKeybinding)
router.use(AuthnMiddleware.authenticateToken)
router.delete('/:keybinding_id',
  KeybindingsController.deleteKeybinding)

export default router;
