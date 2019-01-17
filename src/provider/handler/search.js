import { api } from '../../brightcove';
export function search(params) {
  const {
    client_id,
    client_secret,
    account_id,
    item_type,
    sort_by,
    limit,
    query
  } = params;

  return api
    .search(client_id, client_secret, account_id, query, limit, sort_by)
    .then(result => {
      return result;
    });
}
