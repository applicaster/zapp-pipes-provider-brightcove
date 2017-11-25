export const manifest = {
  handlers: ['playlist'],
  help: {
    playlist: {
      description: 'return a feed of all the videos in the requested playlist',
      params: {
        url: 'playlist url'
      }
    }
  }
};
