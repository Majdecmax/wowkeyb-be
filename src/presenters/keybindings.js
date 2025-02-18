const toTitleCase = (str) => {
  if (!str) return str;

  // Special cases for class names
  const specialCases = {
    'demonhunter': 'Demon Hunter',
    'deathknight': 'Death Knight',
  };

  if (specialCases[str]) return specialCases[str];

  const words = str.split('-');
  return words
    .map((word, index) => {
      const lowerWord = word.toLowerCase();
      // Don't capitalize 'of' and 'the' unless they're the first word
      if (index > 0 && (lowerWord === 'of' || lowerWord === 'the')) {
        return lowerWord;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

const mapToData = (keybinding) => ({
  keybinding_id: keybinding._id,
  name: toTitleCase(keybinding.name),
  user_id: keybinding.user_id || null,
  class: toTitleCase(keybinding.class) || null,
  spec: toTitleCase(keybinding.spec) || null,
  heroTalent: toTitleCase(keybinding.hero_talent) || null,
  keybinds: keybinding.keybinds || []
})

export const presentOne = (keybinding) => {
  return {
    ...mapToData(keybinding)
  }
}
