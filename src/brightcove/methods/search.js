import axios from '../../axios/axios-config';
import { config } from '../../config';
import { getAuthenticationHeaders } from '../methods/authenticate';

const API_PAGE_LIMIT = 20;

export async function search(
  client_id,
  client_secret,
  accountId,
  query,
  maxCount,
  sort,
  isPlaylistsSearch
) {
  try {
    const path = isPlaylistsSearch ? 'playlists' : 'videos';
    const headers = await getAuthenticationHeaders(client_id, client_secret);
    query = query ? `q=${query}` : '';
    sort = sort ? `sort=${sort}` : '';
    let {
      data: { count }
    } = await axios.get(
      `${
        config.brightcove.cmsAPIBaseUrl
      }accounts/${accountId}/counts/${path}?${query}`,
      { headers }
    );

    if (maxCount && count > maxCount) {
      count = maxCount;
    }

    let allItems = [];
    let offset = 0;
    while (count > 0) {
      const limit = maxCount
        ? Math.min(maxCount, API_PAGE_LIMIT)
        : API_PAGE_LIMIT;
      const result = await axios.get(
        `${
          config.brightcove.cmsAPIBaseUrl
        }accounts/${accountId}/${path}?${query}&offset=${offset}&limit=${limit}&${sort}`,
        { headers }
      );
      allItems = [...allItems, ...result.data];
      count -= result.data.length;
      offset += API_PAGE_LIMIT;
    }
    return { items: allItems };
  } catch (err) {
    return { items: [] };
  }
}
