import { getPlaylist } from './getPlaylist';
import { getFolder } from './getFolder';
import {search} from './search'

export const commands = {
  playlist: getPlaylist,
  folder: getFolder,
  search
};
