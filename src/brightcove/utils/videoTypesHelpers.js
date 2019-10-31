import { config } from '../../config';
import _url from 'url';

function getUnsupportedProfiles(item) {
  return item.profiles
    ? config.video.DASH.profilesToExclude.includes(item.profiles)
    : false;
}

export function getDashSource(data) {
  const videoArr = data.filter(item =>
    item.src &&
    item.type &&
    item.type.toLowerCase() === config.video.DASH.type.toLowerCase() &&
    !getUnsupportedProfiles(item)
  );

  return (videoArr.length > 0) ? videoArr : undefined;
}

export function getHlsSource(data) {
  const videoArr = data.filter(item =>
    item.src &&
    item.type &&
    item.type.toLowerCase() === config.video.HLS.type.toLowerCase()
  );

  return (videoArr.length > 0) ? videoArr : undefined;
}

export function getMP4Source(data) {
  const videoArr = data.filter(item =>
    item.src &&
    item.codec &&
    item.codec.toLowerCase() === config.video.MP4.codec.toLowerCase() &&
    item.container &&
    item.container.toLowerCase() === config.video.MP4.container.toLowerCase()
  );

  return (videoArr.length > 0) ? getVideoWithMinBitrate(videoArr) : undefined;
}

export function getHttpsSource(data) {
  return data.find(item => {
    const { src } = item;
    const aUrl = _url.parse(src, true);
    if (aUrl.protocol === 'https:') {
      return item
    }
  });
}

export function getItemWithSrc(data) {
  return data.find(item => item.src);
}

function getVideoWithMinBitrate(array) {
  const bitrateArray = array.map(item => item.encoding_rate);
  const min = Math.min.apply(null, bitrateArray);

  return array.filter(item => item.encoding_rate === min);
}
