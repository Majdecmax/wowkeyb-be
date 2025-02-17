const toTitleCase = (str) => {
  if (!str) return str;

  // Special cases for class names
  const specialCases = {
    'DemonHunter': 'Demon Hunter',
    'DeathKnight': 'Death Knight'
  };

  if (specialCases[str]) return specialCases[str];

  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const mapToData = (keybinding) => ({
  keybinding_id: keybinding._id,
  name: toTitleCase(keybinding.name),
  user_id: keybinding.user_id || null,
  class: toTitleCase(keybinding.class) || null,
  spec: toTitleCase(keybinding.spec) || null,
  hero_talent: toTitleCase(keybinding.hero_talent) || null,
  keybinds: keybinding.keybinds || []
})

export const presentOne = (keybinding) => {
  return {
    ...mapToData(keybinding)
  }
}
