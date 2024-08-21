import { Router } from "express";

import * as AbilityController from '../../controllers/ability/abilities.js';
import { validateGetAbilities } from '../../validators/abilities.js';

const router = new Router();

router.get('/:wowClass/:spec/:heroTalent',
  validateGetAbilities,
  AbilityController.getAbilities)

export default router;
