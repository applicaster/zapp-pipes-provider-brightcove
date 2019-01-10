import { commands } from './comands';
import {
  updateParamsFromUrl,
  updateParamsFromPluginConfiguration
} from '../../utils';
import { createVideosFeed } from './createVideosFeed';

export const handler = providerInterface => params => {
  const { type } = params;

  params = updateParamsFromUrl(params);
  params = updateParamsFromPluginConfiguration(providerInterface, params);

  return commands[type](params)
    .then(createVideosFeed(params))
    .then(providerInterface.sendResponse)
    .catch(providerInterface.throwError);
};
