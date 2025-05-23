export const weatherPlugin = {
  name: 'weather',
  trigger: /^\/weather (.+)/i,
  execute: async (city) => {
    return {
      city,
      temperature: '22°C'
    };
  }
};