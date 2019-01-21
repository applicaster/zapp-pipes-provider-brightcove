import { playlistMapper } from './mappers/playlistMapper';
import { createFeedItem } from '../../utils';

export function createPlaylistsFeed(params) {
  return function({ title, items }) {
    const { title: ptitle, client_id, client_secret, account_id } = params;
    return createFeedItem(
      items.map(playlistMapper(client_id, client_secret, account_id)),
      ptitle || title
    );
  };
}
