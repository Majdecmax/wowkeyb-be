import Keybinding from '../../models/keybinding.js';
import { presentOne, presentMany } from '../../presenters/keybindings.js';
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

    Logger.info('Getting Keybindings');

    const { user_id } = req.decoded;

    const keybindings = await Keybinding.find({ user_id });

    res.status(200).send(presentMany(keybindings));
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

    console.log('req.decoded', req.decoded);

    const randomClass = generateRandomClassDetails();
    console.log('randomClass', randomClass);
    const newKeybinding = {
      name: 'New Keybinding',
      class: randomClass.class,
      spec: randomClass.spec,
      hero_talent: randomClass.heroTalent,
      user_id: req.decoded?.user_id || null
    }

    const createdKeybinding = await Keybinding.create(newKeybinding);

    return res.status(200).send(presentOne(createdKeybinding));
  } catch (error) {
    next(error);
  }
};
