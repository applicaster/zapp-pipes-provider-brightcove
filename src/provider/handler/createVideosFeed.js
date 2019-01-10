import { videoMapper } from './mappers/videoMapper';
import { createFeedItem } from '../../utils';
import { api } from '../../brightcove';

export function createVideosFeed(params) {
  return function(videos) {
    const { client_id, client_secret, account_id } = params;

    return Promise.all(
      videos.map(video => {
        return api.getVideoSource(
          client_id,
          client_secret,
          account_id,
          video.id
        );
      })
    )
      .then(sources => {
        return videos.map(video => {
          const videoSources = sources.filter(source => {
            return source.videoId === video.id;
          });

          if (videoSources.length > 0) {
            video.src = videoSources[0].src;
          }
          return video;
        });
      })
      .then(items => {
        return items.map(videoMapper);
      })
      .then(items => {
        return createFeedItem(items);
      });
  };
}
