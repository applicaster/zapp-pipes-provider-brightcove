import axios from 'axios';
import { config } from '../../config';
import btoa from 'btoa';
import tokensHolder from '../utils/tokensHolder';

export function authenticate(client_id, client_secret) {
  const token = tokensHolder.getToken(client_id);

  if (token) {
    return new Promise(resolve => resolve(token));
  }

  const data = `grant_type=client_credentials`;
  const encodedAuthorizationString = btoa(`${client_id}:${client_secret}`);
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${encodedAuthorizationString}`
  };
  return axios
    .post(config.brightcove.tokenUrl, data, { headers })
    .then(result => {
      if (result.data.expires_in) {
        tokensHolder.addToken(
          client_id,
          result.data.expires_in,
          result.data.access_token
        );
      }
      return result.data.access_token;
    })
    .catch(err => {
      throw err;
    });
}

export function getAuthenticationHeaders(client_id, client_secret) {
  return authenticate(client_id, client_secret).then(accessToken => {
    return {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    };
  });
}
