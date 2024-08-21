import { check, param } from 'express-validator'

export const classes = {
  'death-knight': {
    specs: {
      blood: ['deathbringer', 'san-layn'],
      frost: ['deathbringer', 'rider-of-the-apocalypse'],
      unholy: ['rider-of-the-apocalypse', 'san-layn']
    }
  },
  'demon-hunter': {
    specs: {
      havoc: ['aldrachi-reaver', 'fel-scarred'],
      vengeance: ['aldrachi-reaver', 'fel-scarred'],
    }
  },
  'druid': {
    specs: {
      balance: ['elunes-chosen', 'keeper-of-the-grove'],
      feral: ['druid-of-the-claw', 'wildstalker'],
      guardian: ['druid-of-the-claw', 'elunes-chosen'],
      restoration: ['keeper-of-the-grove', 'wildstalker']
    }
  },
  'evoker': {
    specs: {
      devastation: ['flameshaper', 'scalecommander'],
      preservation: ['chronowarden', 'flameshaper'],
      augmentation: ['chronowarden', 'scalecommander']
    }
  },
  'hunter': {
    specs: {
      "beast-mastery": ['dark-ranger', 'pack-leader'],
      marksmanship: ['dark-ranger', 'sentinel'],
      survival: ['pack-leader', 'sentinel']
    }
  },
  'mage': {
    specs: {
      arcane: ['spellslinger', 'sunfury'],
      fire: ['frostfire', 'sunfury'],
      frost: ['frostfire', 'spellslinger']
    }
  },
  'monk': {
    specs: {
      brewmaster: ['master-of-harmony', 'shado-pan'],
      mistweaver: ['conduit-of-the-celestials', 'master-of-harmony'],
      windwalker: ['conduit-of-the-celestials', 'shado-pan']
    }
  },
  'paladin': {
    specs: {
      holy: ['herald-of-the-sun', 'lightsmith'],
      protection: ['lightsmith', 'templar'],
      retribution: ['herald-of-the-sun', 'templar']
    }
  },
  'priest': {
    specs: {
      discipline: ['oracle', 'voidweaver'],
      holy: ['archon', 'oracle'],
      shadow: ['archon', 'voidweaver']
    }
  },
  'rogue': {
    specs: {
      assassination: ['deathstalker', 'fatebound'],
      outlaw: ['fatebound', 'trickster'],
      subtlety: ['deathstalker', 'trickster']
    }
  },
  'shaman': {
    specs: {
      elemental: ['farseer', 'stormbringer'],
      enhancement: ['stormbringer', 'totemic'],
      restoration: ['farseer', 'totemic']
    }
  },
  'warlock': {
    specs: {
      affliction: ['hellcaller', 'soul-harvester'],
      demonology: ['diabolist', 'soul-harvester'],
      destruction: ['diabolist', 'hellcaller']
    }
  },
  'warrior': {
    specs: {
      arms: ['colossus', 'slayer'],
      fury: ['mountain-thane', 'slayer'],
      protection: ['colossus', 'mountain-thane']
    }
  }
}

const validClasses = Object.keys(classes);

export const validateGetAbilities = [
  param('wowClass').exists().withMessage('Class is required')
    .isIn(validClasses).withMessage('Invalid class'),
  // Validate spec
  param('spec')
    .exists().withMessage('Spec is required')
    .custom((value, { req }) => {
      const selectedClass = req.params.wowClass;
      if (classes[selectedClass] && classes[selectedClass].specs[value]) {
        return true;
      }
      throw new Error('Invalid spec for the selected class');
    }),

  // Validate heroTalent
  param('heroTalent')
    .exists().withMessage('Hero talent is required')
    .custom((value, { req }) => {
      const selectedClass = req.params.wowClass;
      const selectedSpec = req.params.spec;
      if (classes[selectedClass] && classes[selectedClass].specs[selectedSpec].includes(value)) {
        return true;
      }
      throw new Error('Invalid hero talent for the selected spec');
    })
];
