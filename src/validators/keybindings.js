import { body, query } from 'express-validator';


// Validate GET /api/keybindings
export const validateGetKeybindings = [
  // query('userId').optional().isString()
];

// Validate PUT /api/keybindings
export const validateSaveKeybinding = [
  // body('id').isString().notEmpty(),
  // body('userId').isString().notEmpty(),
  // body('key').isString().notEmpty(),
  // body('command').isString().notEmpty(),
  // body('description').optional().isString()
];

// Validate POST /api/keybindings
export const validateCreateKeybinding = [
  // body('userId').isString().notEmpty(),
  // body('key').isString().notEmpty(),
  // body('command').isString().notEmpty(),
  // body('description').optional().isString(),
];
