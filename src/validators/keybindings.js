import { body, query, param } from 'express-validator';

export const validateGetKeybinding = [
  param('keybinding_id').isString().notEmpty(),
];

// Validate GET /api/keybindings
export const validateGetKeybindings = [
  // query('userId').optional().isString()
];

// Validate PUT /api/keybindings
export const validateUpdateKeybinding = [
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
