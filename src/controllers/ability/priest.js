const specAbilities = {
  holy: {
    abilities: [
      {
        id: 1,
        spellId: 212056,
        name: 'Absolution',
        description: 'Returns all dead party members to life with 35% of maximum health and mana. Cannot be cast when in combat.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_48.jpg'
      },
      {
        id: 2,
        spellId: 2060,
        name: 'Heal',
        description: 'A slow casting spell that heals a single target for a large amount.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_heal.jpg'
      },
      {
        id: 3,
        spellId: 34861,
        name: 'Circle of Healing',
        description: 'Heals up to 5 friendly party or raid members within 30 yards of the target.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_circleofrenewal.jpg'
      },
      {
        id: 4,
        spellId: 139,
        name: 'Renew',
        description: 'Heals the target over 15 seconds.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_renew.jpg'
      },
      {
        id: 5,
        spellId: 2050,
        name: 'Holy Word: Serenity',
        description: 'Performs a miracle, healing a friendly target for a massive amount.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_persuitofjustice.jpg'
      },
      {
        id: 6,
        spellId: 64843,
        name: 'Divine Hymn',
        description: 'Heals all party or raid members within 40 yards for a large amount over 8 seconds.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_divinehymn.jpg'
      }
    ],
    'archon': [],
    'oracle': []
  },
  discipline: {
    abilities: [
      {
        id: 1,
        spellId: 47540,
        name: 'Penance',
        description: 'Launches a volley of holy light at the target, causing Holy damage to an enemy or healing to an ally.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_penance.jpg'
      },
      {
        id: 2,
        spellId: 33206,
        name: 'Pain Suppression',
        description: 'Reduces all damage taken by a friendly target by 40% for 8 sec.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_painsupression.jpg'
      },
      {
        id: 3,
        spellId: 194509,
        name: 'Power Word: Radiance',
        description: 'A burst of light heals the target and 4 injured allies within 30 yards.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordbarrier.jpg'
      },
      {
        id: 4,
        spellId: 81700,
        name: 'Archangel',
        description: 'Increases healing done by 15% for 18 sec.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg'
      },
      {
        id: 5,
        spellId: 62618,
        name: 'Power Word: Barrier',
        description: 'Summons a holy barrier to protect all allies within it, reducing all damage taken by 25%.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordbarrier.jpg'
      },
      {
        id: 6,
        spellId: 47536,
        name: 'Rapture',
        description: 'Immediately grants a large amount of absorption to your Power Word: Shield.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_rapture.jpg'
      }
    ],
    'oracle': [],
    'voidweaver': []
  },
  shadow: {
    abilities: [
      {
        id: 1,
        spellId: 8092,
        name: 'Mind Blast',
        description: 'Blasts the target with shadow energy, causing Shadow damage.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_unholyfrenzy.jpg'
      },
      {
        id: 2,
        spellId: 15407,
        name: 'Mind Flay',
        description: 'Assaults the target\'s mind with Shadow energy, causing Shadow damage over 3 sec and slowing their movement speed by 50%.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_siphonmana.jpg'
      },
      {
        id: 3,
        spellId: 32379,
        name: 'Shadow Word: Death',
        description: 'A word of dark binding that inflicts Shadow damage to the target. Only usable on enemies that have less than 20% health.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_demonbreath.jpg'
      },
      {
        id: 4,
        spellId: 34914,
        name: 'Vampiric Touch',
        description: 'A touch of darkness that causes Shadow damage over time and heals the caster for a portion of the damage dealt.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_stoicism.jpg'
      },
      {
        id: 5,
        spellId: 47585,
        name: 'Dispersion',
        description: 'Disperses into pure Shadow energy, reducing all damage taken by 75% and regenerating 6% mana every 1 sec for 6 sec.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_dispersion.jpg'
      },
      {
        id: 6,
        spellId: 228260,
        name: 'Void Eruption',
        description: 'Releases an explosive blast of pure void energy, causing Shadow damage to all enemies within 10 yards.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_voideruption.jpg'
      }
    ],
    'archon': [],
    'voidweaver': []
  }
};

const abilities = [];

export default { specAbilities, abilities }
