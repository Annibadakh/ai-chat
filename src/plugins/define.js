export const definePlugin = {
  name: 'define',
  trigger: /^\/define (.+)/i,
  execute: async (word) => {
    return {
      word,
      definitions: [
        'A sample defnition of word',
        'Similar meaning of word'
      ]
    };
  }
};