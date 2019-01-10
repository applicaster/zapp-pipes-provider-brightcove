import { api } from '../../brightcove';

export function getPlaylist(params) {
  const { id: playlistId, client_id, client_secret, account_id } = params;

  return api
    .getPlaylist(client_id, client_secret, account_id, playlistId)
    .then(result => {
      return result;
    });
}
