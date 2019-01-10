import { api } from '../../brightcove';
import { videoMapper } from './mappers/videoMapper';
import { createFeedItem } from '../../utils';
import _url from 'url';

export function getPlaylist(params) {
  const {
    url = '',
    id: _playlistId,
    client_id,
    client_secret,
    account_id
  } = params;

  const aUrl = _url.parse(url, true);

  const {
    client_id: qclient_id,
    client_secret: qclient_secret,
    account_id: qaccount_id,
    id: qplaylistId
  } = aUrl.query || {};

  const cid = qclient_id || client_id;
  const csecret = qclient_secret || client_secret;
  const accountId = qaccount_id || account_id;

  const playlistId = qplaylistId || _playlistId;

  let videosResult = [];

  return api
    .getPlaylist(cid, csecret, accountId, playlistId)
    .then(result => {
      return result;
    })
    .then(videos => {
      videosResult = videos;
      return Promise.all(
        videos.map(video => {
          return api.getVideoSource(cid, csecret, accountId, video.id);
        })
      );
    })
    .then(sources => {
      return videosResult.map(video => {
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
