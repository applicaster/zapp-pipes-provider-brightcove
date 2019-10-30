export const config = {
  brightcove: {
    baseUrl: '',
    tokenUrl: 'https://oauth.brightcove.com/v4/access_token',
    cmsAPIBaseUrl: 'https://cms.api.brightcove.com/v1/',
    cmsAPIHost: 'cms.api.brightcove.com'
  },
  provider: {
    name: 'brightcove'
  },
  platform: null,
  video: {
    DASH: {
      type: 'application/dash+xml',
      atomVideoType: 'video/mp4',
      profilesToExclude: ['urn:hbbtv', 'urn:dvb']
    },
    HLS: {
      type: 'application/x-mpegurl',
      atomVideoType: 'video/hls',
    },
    MP4: {
      container: 'mp4',
      codec: 'h264',
      atomVideoType: 'video/mp4',
    }
  }
};
