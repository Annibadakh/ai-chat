export const calcPlugin = {
  name: 'calc',
  trigger: /^\/calc (.+)/i,
  execute: async (expression) => {
    try {
      const result = Function(`"use strict"; return (${expression})`)();
      return { result };
    } catch {
      return { result: 'Error in expression' };
    }
  }
};