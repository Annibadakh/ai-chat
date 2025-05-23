export const definePlugin = {
  name: 'define',
  trigger: /^\/define (.+)/i,
  execute: async (word) => {
    return {
      word,
      definitions: [
        'A mock definition of the word.',
        'Another possible meaning for demonstration.'
      ]
    };
  }
};