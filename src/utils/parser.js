import { plugins } from '../plugins';

export function detectPlugin(message) {
  for (let plugin of plugins) {
    const match = message.match(plugin.trigger);
    if (match) {
      return {
        plugin,
        args: match.slice(1)
      };
    }
  }
  return null;
}

