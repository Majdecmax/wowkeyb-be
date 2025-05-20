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
 * Get keybindings for the home page
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getHomeKeybindings = async (req, res, next) => {
  try {
    Logger.info('Getting Home Keybindings');

    // Get all public keybindings
    const keybindings = await Keybinding.find({ is_public: true });

    // Group keybindings by class
    const classGroups = keybindings.reduce((acc, keybinding) => {
      const className = keybinding.class.charAt(0).toUpperCase() + keybinding.class.slice(1);
      if (!acc[className]) {
        acc[className] = {
          recent: [],
          popular: []
        };
      }
      acc[className].recent.push(keybinding);
      return acc;
    }, {});

    // Sort recent by creation date and limit to 5 per class
    // Sort popular by duplication count and limit to 5 per class
    const result = Object.entries(classGroups).reduce((acc, [className, data]) => {
      acc[className] = {
        recent: presentMany(data.recent
          .sort((a, b) => b.createdAt - a.createdAt)
          .slice(0, 5)),
        popular: presentMany(data.recent
          .sort((a, b) => (b.duplication_count || 0) - (a.duplication_count || 0))
          .slice(0, 5))
      };
      return acc;
    }, {});

    res.status(200).send(result);
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

    if ('isPublic' in req.body) {
      req.body.is_public = req.body.isPublic;
      delete req.body.isPublic;
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

    const randomClass = generateRandomClassDetails();

    if (req.body?.spec === 'beast mastery') {
      req.body.spec = 'beast-mastery';
    }

    // If duplicating an existing keybinding
    if (req.body.duplicate_from) {
      await incrementDuplicationCount(req.body.duplicate_from);
    }

    const classDetails = (req.body?.class && req.body?.spec && req.body?.heroTalent) ? {
      class: req.body.class.toLowerCase().replace(/\s+/g, ''),
      spec: req.body.spec.toLowerCase(),
      heroTalent: req.body.heroTalent.toLowerCase().replace(/\s+/g, '-')
    } : randomClass;

    const newKeybinding = {
      name: req.body?.name || 'New Keybinding',
      class: classDetails.class,
      spec: classDetails.spec,
      hero_talent: classDetails.heroTalent,
      is_public: req.decoded?.user_id ? false : true,
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

    // Check if the ID is a valid MongoDB ObjectId
    const isValidObjectId = /^[0-9a-fA-F]{24}$/.test(keybinding_id);
    if (!isValidObjectId) {
      return res.status(400).send({ message: 'Invalid keybinding ID format' });
    }

    await Keybinding.findByIdAndDelete(keybinding_id);

    return res.status(200).send({ message: 'Keybinding deleted' });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a single keybinding
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getKeybinding = async (req, res, next) => {
  try {
    const { keybinding_id } = req.params;

    // Check if the ID is a valid MongoDB ObjectId
    const isValidObjectId = /^[0-9a-fA-F]{24}$/.test(keybinding_id);
    if (!isValidObjectId) {
      return res.status(400).send({ message: 'Invalid keybinding ID format' });
    }

    const keybinding = await Keybinding.findById(keybinding_id);

    if (!keybinding) {
      return res.status(404).send({ message: 'Keybinding not found' });
    }

    if (!keybinding.is_public && keybinding.user_id !== req.decoded.user_id) {
      return res.status(403).send({ message: 'Not authorized to access this keybinding' });
    }

    return res.status(200).send(presentOne(keybinding));
  } catch (error) {
    next(error);
  }
};

/**
 * Increment the duplication count for a keybinding
 * @param {string} keybindingId - The ID of the keybinding to increment
 */
export const incrementDuplicationCount = async (keybindingId) => {
  try {
    await Keybinding.findByIdAndUpdate(
      keybindingId,
      { $inc: { duplication_count: 1 } }
    );
  } catch (error) {
    Logger.error('Error incrementing duplication count:', error);
  }
};
