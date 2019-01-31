import { createMediaGroupItem } from '../../../utils';
import moment from 'moment';

export function videoMapper(video) {
  const {
    id,
    name: title,
    published_at,
    src = '',
    images,
    cue_points,
    duration = 0,
    custom_fields = {}
  } = video;

  const content = { src, type: 'video/hls' };
  const d = moment(published_at).toDate();
  const published = moment(d).format();

  let media_group = [];
  if (images) {
    if (images.thumbnail && images.thumbnail.src) {
      media_group.push(
        createMediaGroupItem(images.thumbnail.src, 'image_base')
      );
    }

    if (images.poster && images.poster.src) {
      media_group.push(createMediaGroupItem(images.poster.src, 'image1'));
    }
  }

  let link;
  if (video.link && video.link.url) {
    link = {
      type: 'text/html',
      rel: 'alternate',
      href: video.link.url
    };
  }

  let video_ads;
  if (cue_points && cue_points.length > 0) {
    video_ads = cue_points.map(cuepoint => {
      const { time, metadata: ad_url } = cuepoint;
      const offset =
        time === 0 ? 'preroll' : Math.round(time) >= Math.round(duration/1000.0) ? 'postroll' : time;
      return { offset, ad_url };
    });
  }
  const extensions = { video_ads, ...custom_fields };

  return {
    type: {
      value: 'video'
    },
    id,
    title,
    published,
    media_group,
    content,
    link,
    extensions
  };
}
