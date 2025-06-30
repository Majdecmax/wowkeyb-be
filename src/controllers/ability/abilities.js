import Logger from '../../utils/logger.js';
import { validationResult } from "express-validator";
import Ability from '../../models/ability.js';
import Version from '../../models/version.js';

import deathknight from './death-knight.js';
import demonhunter from './demon-hunter.js';
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
  deathknight,
  demonhunter,
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
  try {
    console.log('Retrieving abilities', req.params);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { wowClass, spec, heroTalent, version } = req.params;

    Logger.info(`Retrieving ${wowClass} ${spec} ${heroTalent} abilities`);

    // Determine which version to use
    let targetVersion;
    if (version && version !== 'latest') {
      // Get specific version
      targetVersion = await Version.findById(version);
      if (!targetVersion) {
        return res.status(400).send({ message: 'Invalid version ID' });
      }
    } else {
      // Get the latest version
      targetVersion = await Version.findOne().sort({ createdAt: -1 });
      if (!targetVersion) {
        return res.status(400).send({ message: 'No versions available' });
      }
    }

    // Build query for abilities
    const query = {
      class: wowClass,
      game_version: targetVersion._id,
      is_active: true
    };

    // Get class abilities (spec is null)
    const classAbilities = await Ability.find({
      ...query,
      spec: null,
      ability_type: 'class'
    }).populate('game_version');

    // Get spec abilities
    const specAbilities = await Ability.find({
      ...query,
      spec: spec,
      ability_type: 'spec'
    }).populate('game_version');

    // Get hero talent abilities (if hero talent is specified)
    let heroTalentAbilities = [];
    if (heroTalent && heroTalent !== 'null') {
      heroTalentAbilities = await Ability.find({
        ...query,
        hero_talent: heroTalent,
        ability_type: 'hero_talent'
      }).populate('game_version');
    }

    // Combine all abilities
    const abilities = [
      ...classAbilities,
      ...specAbilities,
      ...heroTalentAbilities
    ];

    // Transform to match the expected format
    const transformedAbilities = abilities.map(ability => ({
      id: ability._id,
      spellId: ability.spell_id,
      name: ability.name,
      description: ability.description,
      icon: ability.icon,
      class: ability.class,
      spec: ability.spec,
      heroTalent: ability.hero_talent,
      abilityType: ability.ability_type,
      levelRequired: ability.level_required,
      cooldown: ability.cooldown,
      range: ability.range,
      cost: ability.cost,
      costAmount: ability.cost_amount,
      gameVersion: ability.game_version.game_version
    })).sort((a, b) => a.name.localeCompare(b.name));

    Logger.info(`Retrieved ${transformedAbilities.length} abilities for ${wowClass} ${spec} ${heroTalent} (version: ${targetVersion.game_version})`);

    return res.status(200).send(transformedAbilities);
  } catch (error) {
    Logger.error('Error retrieving abilities:', error);
    return res.status(500).send({ message: 'Error retrieving abilities' });
  }
}

/**
 * Get abilities for a specific version
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getAbilitiesByVersion = async (req, res) => {
  try {
    const { wowClass, spec, heroTalent, versionId } = req.params;

    Logger.info(`Retrieving ${wowClass} ${spec} ${heroTalent} abilities for version ${versionId}`);

    // Verify version exists
    const version = await Version.findById(versionId);
    if (!version) {
      return res.status(400).send({ message: 'Invalid version ID' });
    }

    // Build query for abilities
    const query = {
      class: wowClass,
      game_version: versionId,
      is_active: true
    };

    // Get class abilities (spec is null)
    const classAbilities = await Ability.find({
      ...query,
      spec: null,
      ability_type: 'class'
    }).populate('game_version');

    // Get spec abilities
    const specAbilities = await Ability.find({
      ...query,
      spec: spec,
      ability_type: 'spec'
    }).populate('game_version');

    // Get hero talent abilities (if hero talent is specified)
    let heroTalentAbilities = [];
    if (heroTalent && heroTalent !== 'null') {
      heroTalentAbilities = await Ability.find({
        ...query,
        hero_talent: heroTalent,
        ability_type: 'hero_talent'
      }).populate('game_version');
    }

    // Combine all abilities
    const abilities = [
      ...classAbilities,
      ...specAbilities,
      ...heroTalentAbilities
    ];

    // Transform to match the expected format
    const transformedAbilities = abilities.map(ability => ({
      id: ability._id,
      spellId: ability.spell_id,
      name: ability.name,
      description: ability.description,
      icon: ability.icon,
      class: ability.class,
      spec: ability.spec,
      heroTalent: ability.hero_talent,
      abilityType: ability.ability_type,
      levelRequired: ability.level_required,
      cooldown: ability.cooldown,
      range: ability.range,
      cost: ability.cost,
      costAmount: ability.cost_amount,
      gameVersion: ability.game_version.game_version
    })).sort((a, b) => a.name.localeCompare(b.name));

    Logger.info(`Retrieved ${transformedAbilities.length} abilities for ${wowClass} ${spec} ${heroTalent} (version: ${version.game_version})`);

    return res.status(200).send(transformedAbilities);
  } catch (error) {
    Logger.error('Error retrieving abilities by version:', error);
    return res.status(500).send({ message: 'Error retrieving abilities' });
  }
}

export const getAbilitiesByGameVersion = async (req, res) => {
  try {
    console.log('Retrieving abilities by game version', req.params);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { wowClass, spec, heroTalent, gameVersion } = req.params;

    Logger.info(`Retrieving ${wowClass} ${spec} ${heroTalent} abilities for game version ${gameVersion}`);

    // Find the version by game_version string
    const targetVersion = await Version.findOne({ game_version: gameVersion });
    if (!targetVersion) {
      return res.status(400).send({ message: `Game version ${gameVersion} not found` });
    }

    // Build query for abilities
    const query = {
      class: wowClass,
      game_version: targetVersion._id,
      is_active: true
    };

    // Get class abilities (spec is null)
    const classAbilities = await Ability.find({
      ...query,
      spec: null,
      ability_type: 'class'
    }).populate('game_version');

    // Get spec abilities
    const specAbilities = await Ability.find({
      ...query,
      spec: spec,
      ability_type: 'spec'
    }).populate('game_version');

    // Get hero talent abilities (if hero talent is specified)
    let heroTalentAbilities = [];
    if (heroTalent && heroTalent !== 'null') {
      heroTalentAbilities = await Ability.find({
        ...query,
        hero_talent: heroTalent,
        ability_type: 'hero_talent'
      }).populate('game_version');
    }

    // Combine all abilities
    const abilities = [
      ...classAbilities,
      ...specAbilities,
      ...heroTalentAbilities
    ];

    // Transform to match the expected format
    const transformedAbilities = abilities.map(ability => ({
      id: ability._id,
      spellId: ability.spell_id,
      name: ability.name,
      description: ability.description,
      icon: ability.icon,
      class: ability.class,
      spec: ability.spec,
      heroTalent: ability.hero_talent,
      abilityType: ability.ability_type,
      levelRequired: ability.level_required,
      cooldown: ability.cooldown,
      range: ability.range,
      cost: ability.cost,
      costAmount: ability.cost_amount,
      gameVersion: ability.game_version.game_version
    })).sort((a, b) => a.name.localeCompare(b.name));

    Logger.info(`Retrieved ${transformedAbilities.length} abilities for ${wowClass} ${spec} ${heroTalent} (version: ${targetVersion.game_version})`);

    return res.status(200).send(transformedAbilities);
  } catch (error) {
    Logger.error('Error retrieving abilities by game version:', error);
    return res.status(500).send({ message: 'Error retrieving abilities' });
  }
}

export const getAbilitiesLatest = async (req, res) => {
  try {
    console.log('Retrieving abilities for latest version', req.params);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { wowClass, spec, heroTalent } = req.params;

    Logger.info(`Retrieving ${wowClass} ${spec} ${heroTalent} abilities for latest version`);

    // Get the latest version
    const targetVersion = await Version.findOne().sort({ createdAt: -1 });
    if (!targetVersion) {
      return res.status(400).send({ message: 'No versions available' });
    }

    // Build query for abilities
    const query = {
      class: wowClass,
      game_version: targetVersion._id,
      is_active: true
    };

    // Get class abilities (spec is null)
    const classAbilities = await Ability.find({
      ...query,
      spec: null,
      ability_type: 'class'
    }).populate('game_version');

    // Get spec abilities
    const specAbilities = await Ability.find({
      ...query,
      spec: spec,
      ability_type: 'spec'
    }).populate('game_version');

    // Get hero talent abilities (if hero talent is specified)
    let heroTalentAbilities = [];
    if (heroTalent && heroTalent !== 'null') {
      heroTalentAbilities = await Ability.find({
        ...query,
        hero_talent: heroTalent,
        ability_type: 'hero_talent'
      }).populate('game_version');
    }

    // Combine all abilities
    const abilities = [
      ...classAbilities,
      ...specAbilities,
      ...heroTalentAbilities
    ];

    // Transform to match the expected format
    const transformedAbilities = abilities.map(ability => ({
      id: ability._id,
      spellId: ability.spell_id,
      name: ability.name,
      description: ability.description,
      icon: ability.icon,
      class: ability.class,
      spec: ability.spec,
      heroTalent: ability.hero_talent,
      abilityType: ability.ability_type,
      levelRequired: ability.level_required,
      cooldown: ability.cooldown,
      range: ability.range,
      cost: ability.cost,
      costAmount: ability.cost_amount,
      gameVersion: ability.game_version.game_version
    })).sort((a, b) => a.name.localeCompare(b.name));

    Logger.info(`Retrieved ${transformedAbilities.length} abilities for ${wowClass} ${spec} ${heroTalent} (latest version: ${targetVersion.game_version})`);

    return res.status(200).send(transformedAbilities);
  } catch (error) {
    Logger.error('Error retrieving abilities for latest version:', error);
    return res.status(500).send({ message: 'Error retrieving abilities' });
  }
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
