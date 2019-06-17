import { createMediaGroupItem } from '../../../utils';
import moment from 'moment';

export function videoMapper(imageKeys) {
  return function(video) {
    const {
      id,
      name: title,
      published_at,
      src = '',
      images,
      cue_points,
      duration = 0,
      custom_fields = {},
      text_tracks: _text_tracks
    } = video;

    const content = { src, type: 'video/hls' };
    const d = moment(published_at).toDate();
    const published = moment(d).format();
    let media_group = imageKeys
      .map(imageKey => {
        try {
          const arr = imageKey.split(':');
          if (images[arr[0]] && images[arr[0]].src) {
            return createMediaGroupItem(images[arr[0]].src, arr[1]);
          }
        } catch (err) {
          return null;
        }
      })
      .filter(i => i);

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
          time === 0
            ? 'preroll'
            : Math.round(time) >= Math.round(duration / 1000.0)
            ? 'postroll'
            : time;
        return { offset, ad_url };
      });
    }

    let text_tracks;

    if (_text_tracks && _text_tracks.length > 0) {
      const tracks = _text_tracks.map(track => {
        const {label, kind: type, srclang: language, src: source}  = track;
        return {label, type, language, source};
      })
      text_tracks = {version: '1.0', tracks};
    }
    const extensions = { video_ads, ...custom_fields, text_tracks };

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
  };
}
