import moment from 'moment';
import { config } from '../../../config';

export function playlistMapper(client_id, client_secret, account_id) {
  return function(playlist) {
    const {
      id,
      name: title,
      published_at,
      description: summary
    } = playlist;

    const d = moment(published_at).toDate();
    const published = moment(d).format();

    let type = 'atom';
    let rel = 'self;';
    let src = `${
      config.provider.name
    }://fetchData?type=playlist&id=${id}&client_id=${client_id}&client_secret=${client_secret}&account_id=${account_id}`;

    const content = { type, rel, src };

    return {
      type: {
        value: 'feed'
      },
      id,
      title,
      published,
      summary,
      content
    };
  };
}
