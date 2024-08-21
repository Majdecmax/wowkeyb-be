import Logger from '../../utils/logger.js';
import { validationResult } from "express-validator";

import deathKnight from './death-knight.js';
import demonHunter from './demon-hunter.js';
import druid from './druid.js';
import evoker from './evoker.js';
import hunter from './hunter.js';
import mage from './mage.js';
import paladin from './paladin.js';
import priest from './priest.js';
import rogue from './rogue.js';
import shaman from './shaman.js';
import warlock from './warlock.js';
import warrior from './warrior.js';

const classes = {
  "death-knight": deathKnight,
  "demon-hunter": demonHunter,
  druid,
  evoker,
  hunter,
  mage,
  paladin,
  priest,
  shaman,
  rogue,
  warlock,
  warrior
}

export const getAbilities = async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { wowClass, spec, heroTalent } = req.params;

  Logger.info(`Retrieving ${wowClass} ${spec} ${heroTalent} abilities`);

  let abilities = [
    ...classes[wowClass].abilities, //class abilities
    ...classes[wowClass].specAbilities[spec].abilities, //spec abilities
    ...classes[wowClass].specAbilities[spec][heroTalent] //hero talent abilities
  ];

  return res.status(200).send(abilities);
}
