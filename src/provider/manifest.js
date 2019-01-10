export const manifest = {
  handlers: ['playlist', 'folder'],
  help: {
    playlist: {
      description: 'return a feed of all the videos in the requested playlist',
      params: {
        id: 'playlist id'
      }
    },
    folder: {
      description: 'return a feed of all the videos in the requested folder',
      params: {
        id: 'folder id'
      }
    }
  }
};
