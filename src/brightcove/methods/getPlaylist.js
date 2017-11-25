import axios from 'axios';
import { config } from '../../config';
import { getAuthenticationHeaders } from '../methods/authenticate';

export function getPlaylist(client_id, client_secret, accountId, playlistId) {
  return getAuthenticationHeaders(client_id, client_secret)
    .then(headers => {
      return axios.get(
        `${config.brightcove.cmsAPIBaseUrl}accounts/${accountId}/playlists/${
          playlistId
        }/videos`,
        { headers }
      );
    })
    .then(result => {
      return result.data;
    })
    .catch(err => {
      if (err.response && err.response.status == 404) {
        return [];
      }

      throw err;
    });
}
