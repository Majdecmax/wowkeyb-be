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
export const updateKeybinding = async (req, res, next) => {
  try {
    const { keybinding_id } = req.params;
    const keybinding = await Keybinding.findById(keybinding_id);

    if (!keybinding) {
      return res.status(404).send({ message: 'Keybinding not found' });
    }

    // If keybinding has a user_id, verify ownership
    if (keybinding.user_id) {
      const { decoded } = req;
      if (!decoded || !decoded.user_id) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const keybindingUserId = keybinding.user_id.toString();
      if (keybindingUserId !== decoded.user_id) {
        Logger.error('User is not authorized to update this keybinding');
        return res.status(403).json({ message: 'Not authorized to modify this keybinding' });
      }
    }

    req.body.hero_talent = req.body.heroTalent;
    delete req.body.heroTalent;

    // Normalize class field if it exists
    if (req.body.class) {
      req.body.class = req.body.class.toLowerCase().replace(/\s+/g, '');

      //if the class is not the same as the keybinding class, remove keybinds
      if (req.body.class !== keybinding.class) {
        req.body.keybinds = [];
      }
    }
    if (req.body.spec) {
      req.body.spec = req.body.spec.toLowerCase();

      if (req.body.spec === 'beast mastery') {
        req.body.spec = 'beast-mastery';
      }

      //if the spec is not the same as the keybinding spec, remove keybinds
      if (req.body.spec !== keybinding.spec) {
        req.body.keybinds = [];
      }
    }

    if (req.body.hero_talent) {

      req.body.hero_talent = req.body.hero_talent.toLowerCase();

      //if there is a space in the hero_talent, replace it with a dash
      if (req.body.hero_talent.includes(' ')) {
        req.body.hero_talent = req.body.hero_talent.replace(/\s+/g, '-');
      }

      //if the hero_talent is not the same as the keybinding hero_talent, remove keybinds
      if (req.body.hero_talent !== keybinding.hero_talent) {
        req.body.keybinds = [];
      }

    }

    if (req.body.keybinds) {
      req.body.keybinds = req.body.keybinds.map(keybind => {
        if (keybind.spell.spellId) {
          keybind.spell.spell_id = keybind.spell.spellId.toString();
          delete keybind.spell.spellId;
        }
        return keybind;
      })
    }
    console.log('after req.body', req.body);
    const updatedKeybinding = await Keybinding.findOneAndUpdate(
      { _id: keybinding_id },
      req.body,
      { new: true }
    );

    return res.status(200).send(presentOne(updatedKeybinding));
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

/**
 * Delete a keybinding
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const deleteKeybinding = async (req, res, next) => {
  try {
    const { keybinding_id } = req.params;

    await Keybinding.findByIdAndDelete(keybinding_id);

    return res.status(200).send({ message: 'Keybinding deleted' });
  } catch (error) {
    next(error);
  }
};
