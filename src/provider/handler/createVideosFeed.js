import { videoMapper } from './mappers/videoMapper';
import { createFeedItem } from '../../utils';
import { api } from '../../brightcove';

export function createVideosFeed(params) {
  return function({ title, items: videos }) {
    const {
      client_id,
      client_secret,
      account_id,
      title: ptitle,
      imageKeys = 'thumbnail:image_base|poster:image1',
      platform
    } = params;

    return Promise.all(
      videos.map(video => {
        return api.getVideoSource(
          client_id,
          client_secret,
          account_id,
          video.id,
          platform
        );
      })
    )
      .then(sources => {
        return videos.map(video => {
          const videoSources = sources.filter(source => {
            return source.videoId === video.id;
          });

          if (videoSources.length > 0) {
            const [{ src, type }] = videoSources;
            video.src = src;
            video.type = type;
          }
          return video;
        });
      })
      .then(items => {
        return items.map(videoMapper(imageKeys.split('|')));
      })
      .then(items => {
        return createFeedItem(items, ptitle || title);
      });
  };
}
