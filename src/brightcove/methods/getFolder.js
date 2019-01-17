import axios from 'axios';
import { config } from '../../config';
import { getAuthenticationHeaders } from '../methods/authenticate';
import { getFolderInfo } from './getFolderInfo';

const API_PAGE_LIMIT = 20;

export async function getFolder(client_id, client_secret, accountId, folderId) {
  try {
    const headers = await getAuthenticationHeaders(client_id, client_secret);
    const folder = await getFolderInfo(
      client_id,
      client_secret,
      accountId,
      folderId,
      headers
    );
    const { video_count, name: title } = folder;
    let count = video_count;
    let allItems = [];
    let offset = 0;
    while (count > 0) {
      const result = await axios.get(
        `${
          config.brightcove.cmsAPIBaseUrl
        }accounts/${accountId}/folders/${folderId}/videos?offset=${offset}&limit=${API_PAGE_LIMIT}`,
        { headers }
      );
      allItems = [...allItems, ...result.data];
      count -= result.data.length;
      offset += API_PAGE_LIMIT;
    }
    return { title, items: allItems };
  } catch (err) {
    return { title: '', items: [] };
  }
}
