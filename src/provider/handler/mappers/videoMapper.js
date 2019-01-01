import { createMediaGroupItem } from '../../../utils';
import moment from 'moment'

export function videoMapper(video) {
  const { id, name: title, published_at, src = '', images } = video;

  const content = { src, type: 'video/hls' };
  const published = moment.unix(moment(published_at)).format()

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

  return {
    type: {
      value: 'video'
    },
    id,
    title,
    published,
    media_group,
    content,
    link
  };
}
