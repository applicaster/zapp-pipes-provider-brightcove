import { authenticate } from './methods/authenticate';
import { getPlaylist } from './methods/getPlaylist';
import { getVideoSource } from './methods/getVideoSource';
import { getFolder } from './methods/getFolder';

export const api = {
  authenticate,
  getPlaylist,
  getFolder,
  getVideoSource
};
