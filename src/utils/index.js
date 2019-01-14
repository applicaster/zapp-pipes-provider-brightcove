import _url from 'url';

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

export function updateParamsFromUrl(params) {
  const { url = '' } = params;
  let q = {};
  try {
    const aUrl = _url.parse(url, true);
    q = aUrl.query;
    Object.keys(q).forEach(key => {
      if (!params[key]) {
        params[key] = q[key];
      }
    });
  } catch (err) {
  } finally {
    return params;
  }
}

export function updateParamsFromPluginConfiguration(providerInterface, params) {
  try {
    const { pluginConfigurations } = providerInterface.appData();
    if (pluginConfigurations) {
      const o = JSON.parse(pluginConfigurations);
      const bc = o['brightcove-ds']
      Object.keys(bc).forEach(key => {
        if (!params[key]) {
          params[key] = bc[key];
        }
      });
    }
  } catch (err) {
  } finally {
    return params;
  }
}
