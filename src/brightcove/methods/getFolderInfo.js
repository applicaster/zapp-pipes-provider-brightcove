import axios from '../../axios/axios-config';
import { config } from '../../config';
import { getAuthenticationHeaders } from '../methods/authenticate';

export async function getFolderInfo(
  client_id,
  client_secret,
  accountId,
  folderId,
  headers
) {
  try {
    if (!headers) {
      headers = await getAuthenticationHeaders(client_id, client_secret);
    }
    const result = await axios.get(
      `${
        config.brightcove.cmsAPIBaseUrl
      }accounts/${accountId}/folders/${folderId}`,
      { headers }
    );
    return result.data;
  } catch (err) {
    return {};
  }
}
