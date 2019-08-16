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

export function createFeedItem(entry, title) {
  return {
    type: {
      value: 'feed'
    },
    title,
    entry
  };
}

export function stringToBool(string) {
    if (string !== undefined) {
        return string.toLowerCase() === 'true' ? true : false;
    }
}

export function stringToArr(string) {
    return string ? string.split(',') : undefined;
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
      let o;
      try {
        o = JSON.parse(pluginConfigurations);
      } catch (err) {
        o = pluginConfigurations;
      }
      const bc = o['brightcove-ds'];
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
