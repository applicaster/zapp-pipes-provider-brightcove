import { api } from '../../brightcove';

export function getFolder(params) {
  const { id, client_id, client_secret, account_id } = params;

  return api
    .getFolder(client_id, client_secret, account_id, id)
    .then(result => {
      return result;
    });
}
