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
  deathKnight,
  demonHunter,
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

export const generateRandomClassDetails = () => {
  // Get random class
  const classNames = Object.keys(classes);
  const randomClass = classNames[Math.floor(Math.random() * classNames.length)];

  // Get random spec for the selected class
  const specs = Object.keys(classes[randomClass].specAbilities);
  const randomSpec = specs[Math.floor(Math.random() * specs.length)];

  // Get random hero talent for the spec
  const heroTalents = Object.keys(classes[randomClass].specAbilities[randomSpec])
    .filter(key => key !== 'abilities'); // Filter out the 'abilities' key
  const randomHeroTalent = heroTalents[Math.floor(Math.random() * heroTalents.length)];

  return {
    class: randomClass,
    spec: randomSpec,
    heroTalent: randomHeroTalent
  };
}
