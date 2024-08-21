const specAbilities = {
  blood: {
    'deathbringer': ['help'],
    'san-layn': ['help']
  },
  frost: {
    'deathbringer': [],
    'rider-of-the-apocalypse': []
  },
  unholy: {
    'rider-of-the-apocalypse': [],
    'san-layn': []
  }
}

const abilities = [
  { id: 1, name: 'Fireball', description: 'Shoots a ball of fire.', power: 50, icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_48.jpg' },
  { id: 2, name: 'Ice Shard', description: 'Launches a shard of ice.', power: 40, icon: 'assets/icons/ice_shard.png' },
  { id: 3, name: 'Lightning Bolt', description: 'Strikes with a bolt of lightning.', power: 60, icon: 'assets/icons/lightning_bolt.png' },
];

export default { specAbilities, abilities }
