import axios from 'axios';
import { config } from '../../config';
import { getAuthenticationHeaders } from '../methods/authenticate';

export async function getPlaylistInfo(
  client_id,
  client_secret,
  accountId,
  playlistId,
  headers
) {
  try {
    if (!headers) {
      headers = await getAuthenticationHeaders(client_id, client_secret);
    }
    const result = await axios.get(
      `${
        config.brightcove.cmsAPIBaseUrl
      }accounts/${accountId}/playlists/${playlistId}`,
      { headers }
    );
    return result.data;
  } catch (err) {
    return {};
  }
}
