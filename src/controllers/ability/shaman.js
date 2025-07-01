const specAbilities = {
  elemental: {
    abilities: [
      {
        // EXAMPLE
        id: 1,
        spellId: 212056,
        name: 'Absolution',
        description: 'Returns all dead party members to life with 35% of maximum health and mana. Cannot be cast when in combat.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_48.jpg'
      },
      {
        id: 2,
        spellId: 188389,
        name: 'Flame Shock',
        description: 'Ignites the target, causing fire damage over time.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_flameshock.jpg'
      },
      {
        id: 3,
        spellId: 196840,
        name: 'Frost Shock',
        description: 'Deals frost damage and slows the target.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostshock.jpg'
      },
      {
        id: 4,
        spellId: 8042,
        name: 'Earth Shock',
        description: 'Instantly shocks the target, dealing nature damage.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthshock.jpg'
      },
      {
        id: 5,
        spellId: 51505,
        name: 'Lava Burst',
        description: 'Hurls molten lava at the target. Always critically strikes if Flame Shock is active.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_lavaburst.jpg'
      },
      {
        id: 6,
        spellId: 188196,
        name: 'Lightning Bolt',
        description: 'Hurls a bolt of lightning at the target, dealing nature damage.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg'
      },
      {
        id: 7,
        spellId: 188443,
        name: 'Chain Lightning',
        description: 'Strikes the primary target with a bolt of lightning that arcs to additional enemies.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_chainlightning.jpg'
      },
      {
        id: 8,
        spellId: 117014,
        name: 'Elemental Blast',
        description: 'Unleashes a blast of elemental fury at the target, dealing damage and granting a chance to hit bonus.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_elementalblast.jpg'
      },
      {
        id: 9,
        spellId: 191634,
        name: 'Stormkeeper',
        description: 'Calls upon the power of storms, empowering your next Lightning Bolt or Chain Lightning.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_stormkeeper.jpg'
      },
      {
        id: 10,
        spellId: 16166,
        name: 'Elemental Mastery',
        description: 'Increases your critical strike chance and guarantees your next spell is a critical strike.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_wispsleep.jpg'
      },
      {
        id: 11,
        spellId: 114049,
        name: 'Ascendance',
        description: 'Transform into an Ascended Elemental, gaining powerful new spells for a short duration.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_ascendance.jpg'
      }
    ],
    farseer: [
      {
        id: 12,
        spellId: 61882,
        name: 'Earthquake',
        description: 'Creates an earthquake that damages all enemies in the area over time.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthquake.jpg'
      },
      {
        id: 13,
        spellId: 382461,
        name: 'Conduction',
        description: 'Your elemental spells generate additional Maelstrom for each critical strike.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_focusedconduit.jpg'
      },
      {
        id: 14,
        spellId: 198838,
        name: 'Earthen Shield Totem',
        description: 'Summons an Earthen Shield Totem that grants an absorb shield to nearby allies.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_earthenshieldtotem.jpg'
      },
      {
        id: 15,
        spellId: 382457,
        name: 'Elemental Fusion',
        description: 'Your elemental damage spells empower each other, increasing their effectiveness.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_primallongevity.jpg'
      }
    ],
    stormbringer: [
      {
        id: 16,
        spellId: 382451,
        name: 'Coalescing Storm',
        description: 'Absorbs incoming damage and releases it as a powerful storm blast.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_stormsurge.jpg'
      },
      {
        id: 17,
        spellId: 383076,
        name: 'Primal Elementalist',
        description: 'Summons primal elemental minions to fight alongside you.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_primalelementalist.jpg'
      },
      {
        id: 18,
        spellId: 382470,
        name: 'Fury of Air',
        description: 'Increases your Haste and Critical Strike for a short time.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_furyofair.jpg'
      },
      {
        id: 19,
        spellId: 382474,
        name: 'Tempest Mastery',
        description: 'Your Lightning Bolt and Chain Lightning deal increased damage and jump further.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_tempestmastery.jpg'
      }
    ]
  },

  enhancement: {
    abilities: [
      {
        id: 20,
        spellId: 17364,
        name: 'Stormstrike',
        description: 'Strikes the target with lightning, dealing Physical and Nature damage.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg'
      },
      {
        id: 21,
        spellId: 60103,
        name: 'Lava Lash',
        description: 'Imbue your weapon with lava, causing your next melee attack to deal Fire damage.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_lavalash.jpg'
      },
      {
        id: 22,
        spellId: 193786,
        name: 'Rockbiter Attack',
        description: 'Empowers your weapon with earth, dealing increased Physical damage.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_stonebite.jpg'
      },
      {
        id: 23,
        spellId: 196834,
        name: 'Frostbrand Attack',
        description: 'Imbue your weapon with frost, slowing the target.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_frostbrand.jpg'
      },
      {
        id: 24,
        spellId: 188389,
        name: 'Flame Shock',
        description: 'Ignites the target, causing Fire damage over time.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_flameshock.jpg'
      },
      {
        id: 25,
        spellId: 196840,
        name: 'Frost Shock',
        description: 'Deals Frost damage and slows the target.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostshock.jpg'
      },
      {
        id: 26,
        spellId: 73680,
        name: 'Unleash Elements',
        description: 'Empowers your next damaging or healing spell based on your specialization.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_unleashweapon.jpg'
      }
    ],
    stormbringer: [
      {
        id: 27,
        spellId: 373188,
        name: 'Landfall',
        description: 'A barrage of attacks that deal increased damage to your primary target.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_landfall.jpg'
      },
      {
        id: 28,
        spellId: 373195,
        name: 'Crushing Storm',
        description: 'Empowers your auto-attacks to deal Nature damage in an area.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_crushingstorm.jpg'
      },
      {
        id: 29,
        spellId: 374251,
        name: 'Seismic Bore',
        description: 'Unleashes a shockwave that damages and knocks down enemies.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_seismicwell.jpg'
      }
    ],
    totemic: [
      {
        id: 30,
        spellId: 3599,
        name: 'Searing Totem',
        description: 'Summons a totem that burns enemies, dealing Fire damage over time.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_searingtotem.jpg'
      },
      {
        id: 31,
        spellId: 8190,
        name: 'Magma Totem',
        description: 'Creates a totem that erupts periodically, dealing Fire damage.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_impoweringtotem.jpg'
      },
      {
        id: 32,
        spellId: 383947,
        name: 'Poison Cloud Totem',
        description: 'Summons a totem that emits poisonous clouds, damaging enemies over time.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_poisoncloud.jpg'
      },
      {
        id: 33,
        spellId: 381652,
        name: 'Seal of the Searsplinter',
        description: 'Surrounds you with elemental energy, reducing damage taken and shocking attackers.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_elementaloasis.jpg'
      }
    ]
  },

  restoration: {
    abilities: [
      {
        id: 34,
        spellId: 77472,
        name: 'Healing Wave',
        description: 'Heals a friendly target for a large amount.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingwavegreater.jpg'
      },
      {
        id: 35,
        spellId: 1064,
        name: 'Chain Heal',
        description: 'Heals a target and then jumps to additional injured allies.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_chainheal.jpg'
      },
      {
        id: 36,
        spellId: 61295,
        name: 'Riptide',
        description: 'Heals the target and applies a HoT effect.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_riptide.jpg'
      },
      {
        id: 37,
        spellId: 73920,
        name: 'Healing Rain',
        description: 'Summons a rain of healing drops at the target location.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingway.jpg'
      },
      {
        id: 38,
        spellId: 974,
        name: 'Earth Shield',
        description: 'Shields the target and heals them when they take damage.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_skinofearth.jpg'
      },
      {
        id: 39,
        spellId: 191861,
        name: 'Spirit of the Maelstrom',
        description: 'Increases your casting speed after dealing Nature, Frost, or Storm damage.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_spiritlink.jpg'
      },
      {
        id: 40,
        spellId: 73680,
        name: 'Unleash Elements',
        description: 'Empowers your next damaging or healing spell based on your specialization.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_unleashweapon.jpg'
      }
    ],
    farseer: [
      {
        id: 41,
        spellId: 2484,
        name: 'Earthbind Totem',
        description: 'Summons a totem that slows enemy movement speed.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_stranglevines.jpg'
      },
      {
        id: 42,
        spellId: 198839,
        name: 'Earthen Wall Totem',
        description: 'Places a wall that blocks enemy movement.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_earthenwalltotem.jpg'
      }
    ],
    totemic: [
      {
        id: 43,
        spellId: 383932,
        name: 'Totemic Projection',
        description: 'Places your totems at a greater distance from you.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_totemicprojection.jpg'
      },
      {
        id: 44,
        spellId: 210643,
        name: 'Totemic Mastery',
        description: 'Reduces the mana cost of your totems by 50%.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_totemrelocation.jpg'
      },
      {
        id: 45,
        spellId: 377719,
        name: 'Echo of the Elements',
        description: 'Your healing totems cast their healing spell an additional time.',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_echooftheelements.jpg'
      }
    ]
  }
}

// class-wide abilities
const abilities = [
  {
    // EXAMPLE
    id: 1,
    spellId: 31884,
    name: 'Avenging Wrath',
    description: 'Call upon the Light to become an avatar of retribution, allowing Hammer of Wrath to be used on any target, increasing your damage, healing and critical strike chance by 15% for 20 sec.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_48.jpg'
  },
  {
    id: 2,
    spellId: 2645,
    name: 'Ghost Wolf',
    description: 'Transform into a Ghost Wolf, increasing movement speed by 40%.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_spiritwolf.jpg'
  },
  {
    id: 3,
    spellId: 2008,
    name: 'Ancestral Spirit',
    description: 'Resurrects a dead ally, returning them to life with 35% health.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_reincarnation.jpg'
  },
  {
    id: 4,
    spellId: 51514,
    name: 'Hex',
    description: 'Transforms the enemy into a frog, incapacitating them.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg'
  },
  {
    id: 5,
    spellId: 51886,
    name: 'Cleanse Spirit',
    description: 'Removes a curse, poison, or disease effect from an ally.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_cleansespirit.jpg'
  },
  {
    id: 6,
    spellId: 79206,
    name: "Spiritwalker's Grace",
    description: 'Allows you to cast while moving for a short duration.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_spiritwalkersgrace.jpg'
  },
  {
    id: 7,
    spellId: 73680,
    name: 'Unleash Elements',
    description: 'Empowers your next damaging or healing spell based on specialization.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_unleashweapon.jpg'
  },
  {
    id: 8,
    spellId: 57994,
    name: 'Wind Shear',
    description: 'Interrupts instant-cast spells, locking out the school for 5 sec.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_windshear.jpg'
  },
  {
    id: 9,
    spellId: 192058,
    name: 'Capacitor Totem',
    description: 'Summons a totem that runs an electric current through enemies.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningshield.jpg'
  },
  {
    id: 10,
    spellId: 98008,
    name: 'Spirit Link Totem',
    description: 'Links the health of nearby allies, sharing damage among them.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_spiritlink.jpg'
  },
  {
    id: 11,
    spellId: 205495,
    name: "Nature's Guardian",
    description: 'When you take fatal damage, you heal for 60% of your maximum health instead.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_naturesguardian.jpg'
  },
  {
    id: 12,
    spellId: 2825,
    name: 'Bloodlust',
    description: 'Increases haste by 30% for 40 sec (Horde only).',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_bloodlust.jpg'
  },
  {
    id: 13,
    spellId: 32182,
    name: 'Heroism',
    description: 'Increases haste by 30% for 40 sec (Alliance only).',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_heroism.jpg'
  },
  {
    id: 14,
    spellId: 80353,
    name: 'Time Warp',
    description: 'Increases haste by 30% for 40 sec (Pandaren racial).',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_timewarp.jpg'
  },
  {
    id: 15,
    spellId: 5394,
    name: 'Healing Stream Totem',
    description: 'Summons a totem that heals the nearest injured party or raid member.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingstreamtotem.jpg'
  },
  {
    id: 16,
    spellId: 108280,
    name: 'Healing Tide Totem',
    description: 'Heals all party and raid members within 40 yards every 2 sec for 15 sec.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_healingtide.jpg'
  },
  {
    id: 17,
    spellId: 198838,
    name: 'Earthen Shield Totem',
    description: 'Grants absorbs to all allies within 30 yards.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_earthenshieldtotem.jpg'
  },
  {
    id: 18,
    spellId: 2484,
    name: 'Earthbind Totem',
    description: 'Slows enemy movement speed by 30% in a small area.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_stranglevines.jpg'
  },
  {
    id: 19,
    spellId: 192077,
    name: 'Wind Rush Totem',
    description: 'Increases movement speed of allies within 30 yards.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_windwalktotem.jpg'
  },
  {
    id: 20,
    spellId: 8143,
    name: 'Tremor Totem',
    description: 'Removes fear, sleep, and charm effects from nearby allies.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_groundingtotem.jpg'
  },
  {
    id: 21,
    spellId: 204336,
    name: 'Grounding Totem',
    description: 'Absorbs a harmful spell cast on an ally.',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_groundingtotem.jpg'
  }
];

export default { specAbilities, abilities };
