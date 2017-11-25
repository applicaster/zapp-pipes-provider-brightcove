export function createMediaGroupItem(src, key) {
  return {
    type: 'image',
    media_item: [
      {
        src,
        key
      }
    ]
  };
}

export function createFeedItem(entry) {
  return {
    type: {
      value: 'feed'
    },
    entry
  };
}
