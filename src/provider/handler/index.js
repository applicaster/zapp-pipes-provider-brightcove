import { commands } from './comands';
import {
  updateParamsFromUrl,
  updateParamsFromPluginConfiguration
} from '../../utils';
import { createVideosFeed } from './createVideosFeed';
import { createPlaylistsFeed } from './createPlaylistsFeed';

export const handler = providerInterface => params => {
  const { type } = params;
  const { platform } = providerInterface.appData();

  params.platform = platform.toLowerCase() || '';
  params = updateParamsFromUrl(params);
  params = updateParamsFromPluginConfiguration(providerInterface, params);

  return commands[type](params)
    .then(type==='search' && params.item_type === 'playlists' ? createPlaylistsFeed(params) : createVideosFeed(params))
    .then(providerInterface.sendResponse)
    .catch(providerInterface.throwError);
};
