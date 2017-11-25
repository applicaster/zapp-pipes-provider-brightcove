import { api } from '../../brightcove';
import { videoMapper } from './mappers/videoMapper';
import { createFeedItem } from '../../utils';
import _url from 'url';

export function getPlaylist(params) {
  const { url, client_id, client_secret, account_id } = params;

  const aUrl = _url.parse(url, true);

  //make sure this is a valid playlist url
  if (!aUrl) {
    throw {
      message: 'this is not a valid playlist url',
      statusCode: 500
    };
  }

  const paths = aUrl.pathname.split('/');
  if (paths.length === 0) {
    throw {
      message: 'this is not a valid playlist url',
      statusCode: 500
    };
  }

  const {
    client_id: qclient_id,
    client_secret: qclient_secret,
    account_id: qaccount_id
  } =
    aUrl.query || {};

  const cid = qclient_id || client_id;
  const csecret = qclient_secret || client_secret;
  const accountId = qaccount_id || account_id;

  const playlistId = paths[paths.length - 1];
  return api
    .getPlaylist(cid, csecret, accountId, playlistId)
    .then(result => {
      return result;
    })
    .then(videos => {
      this.videos = videos;
      return Promise.all(
        videos.map(video => {
          return api.getVideoSource(cid, csecret, accountId, video.id);
        })
      );
    })
    .then(sources => {
      return this.videos.map(video => {
        const videoSources = sources.filter(source => {
          return source.videoId === video.id;
        });

        if (videoSources.length > 0) {
          video.src = videoSources[0].src;
        }
        return video;
      });
    })
    .then(videos => {
      return videos.map(videoMapper);
    })
    .then(videos => {
      return createFeedItem(videos);
    });
}
