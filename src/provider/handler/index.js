import { commands } from './comands';

export const handler = providerInterface => params => {
  const { type } = params;

  try {
    const { pluginConfigurations } = providerInterface.appData();
    if (pluginConfigurations) {
      Object.keys(pluginConfigurations).forEach(key => {
        if (!params[key]) {
          params[key] = pluginConfigurations[key];
        }
      });
    }
  } catch (err) {}

  return commands[type](params)
    .then(providerInterface.sendResponse)
    .catch(providerInterface.throwError);
};
