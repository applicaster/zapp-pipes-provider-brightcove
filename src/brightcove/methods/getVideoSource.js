import axios from '../../axios/axios-config';
import { config } from '../../config';
import { getAuthenticationHeaders } from '../methods/authenticate';
import { getDashSource, getHlsSource, getMP4Source, getHttpsSource, getItemWithSrc } from '../utils/videoTypesHelpers';

export function getVideoSource(client_id, client_secret, accountId, videoId, platform) {

  function getVideo(data) {
    let videoItems;
    switch (platform) {
      case config.platform.ANDROID:
        videoItems = getVideoForAndroid(data);
        break;
      case config.platform.IOS:
        videoItems = getVideoForIos(data);
        break;
      default:
        videoItems = getMP4Source(data);
    }
    return videoItems ? getHttpsSource(videoItems) : getItemWithSrc(data);
  }

  function getVideoForAndroid(data) {
    return getDashSource(data) || getHlsSource(data) || getMP4Source(data);
  }

  function getVideoForIos(data) {
    return getHlsSource(data) || getMP4Source(data);
  }

  return getAuthenticationHeaders(client_id, client_secret)
    .then(headers => {
      return axios.get(
        `${
          config.brightcove.cmsAPIBaseUrl
        }accounts/${accountId}/videos/${videoId}/sources`,
        { headers }
      );
    })
    .then(({ data }) => {
      const videoItem = getVideo(data);
      const { src = '', type = '' } = videoItem || {};
      return { videoId, src, type };
    })
    .catch(err => {
      console.log(err);
      return {};
    });
}
