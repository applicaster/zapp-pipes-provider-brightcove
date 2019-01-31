export const manifest = {
  handlers: ['playlist', 'folder', 'search'],
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
    },
    search: {
      description: 'return a feed of all the videos in a search query',
      params: {
        item_type: 'playlists or videos',
        query: 'search query',
        limit: 'result limit',
        sort_by: 'sort by field'
      }
    }
  }
};
