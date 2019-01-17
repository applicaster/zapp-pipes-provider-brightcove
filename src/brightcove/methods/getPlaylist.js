import axios from 'axios';
import { config } from '../../config';
import { getAuthenticationHeaders } from '../methods/authenticate';
import { getPlaylistInfo } from '../methods/getPlaylistInfo';

const API_PAGE_LIMIT = 20;

export async function getPlaylist(
  client_id,
  client_secret,
  accountId,
  playlistId
) {
  try {
    const headers = await getAuthenticationHeaders(client_id, client_secret);
    const playlist = await getPlaylistInfo(
      client_id,
      client_secret,
      accountId,
      playlistId,
      headers
    );

    const { name: title } = playlist;
    let {
      data: { count }
    } = await axios.get(
      `${
        config.brightcove.cmsAPIBaseUrl
      }accounts/${accountId}/counts/playlists/${playlistId}/videos`,
      { headers }
    );

    let allItems = [];
    let offset = 0;
    while (count > 0) {
      const result = await axios.get(
        `${
          config.brightcove.cmsAPIBaseUrl
        }accounts/${accountId}/playlists/${playlistId}/videos?&offset=${offset}&limit=${API_PAGE_LIMIT}`,
        { headers }
      );
      allItems = [...allItems, ...result.data];
      count -= result.data.length;
      offset += API_PAGE_LIMIT;
    }
    return { title, items: allItems };
  } catch (err) {
    return { title: '', items: [] };
  }
}
