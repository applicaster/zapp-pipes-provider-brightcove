import { authenticate } from './methods/authenticate';
import { getPlaylist } from './methods/getPlaylist';
import { getVideoSource } from './methods/getVideoSource';
import { getFolder } from './methods/getFolder';
import { search } from './methods/search';

export const api = {
  authenticate,
  getPlaylist,
  getFolder,
  getVideoSource,
  search
};
