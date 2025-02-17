import Keybinding from '../../models/keybinding.js';
import { presentOne } from '../../presenters/keybindings.js';
import Logger from '../../utils/logger.js';
import { generateRandomClassDetails } from '../ability/abilities.js';


/**
 * Get keybindings for the user
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getKeybindings = async (req, res, next) => {
  try {
    // TODO: Implement keybindings retrieval logic

    res.json({ /* response data */ });
  } catch (error) {
    next(error);
  }
};

/**
 * Save/update an existing keybinding
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const saveKeybinding = async (req, res, next) => {
  try {
    // TODO: Implement keybinding update logic

    res.json({ /* response data */ });
  } catch (error) {
    next(error);
  }
};

/**
 * Create a new keybinding
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const createKeybinding = async (req, res, next) => {
  try {
    Logger.info('Creating Keybinding');

    const randomClass = generateRandomClassDetails();
    console.log('randomClass', randomClass);
    const newKeybinding = {
      name: 'New Keybinding',
      class: randomClass.class,
      spec: randomClass.spec,
      hero_talent: randomClass.heroTalent
    }
    console.log('newKeybinding', newKeybinding);
    const createdKeybinding = await Keybinding.create(newKeybinding);
    console.log('createdKeybinding', createdKeybinding);
    console.log('present createdKeybinding', presentOne(createdKeybinding))
    return res.status(200).send({ message: 'OK' });
  } catch (error) {
    next(error);
  }
};
