import axios from 'axios';
import { config } from '../../config';
import { getAuthenticationHeaders } from '../methods/authenticate';

export function getVideoSource(client_id, client_secret, accountId, videoId) {
  return getAuthenticationHeaders(client_id, client_secret)
    .then(headers => {
      return axios.get(
        `${config.brightcove.cmsAPIBaseUrl}accounts/${accountId}/videos/${
          videoId
        }/sources`,
        { headers }
      );
    })
    .then(result => {
      const source = result.data.reduce((currentSource, element) => {
        if (
          element.codec &&
          element.codec.toLowerCase() === 'h264' &&
          element.container &&
          element.container.toLowerCase() === 'mp4'
        ) {
          if (currentSource) {
            if (currentSource.height < element.height) {
              return element;
            }
          } else {
            return element;
          }
        }
        return currentSource;
      }, null);
      const { src = '' } = source || {};
      const response = { videoId, src };
      return response;
    })
    .catch(err => {
      return {};
    });
}
