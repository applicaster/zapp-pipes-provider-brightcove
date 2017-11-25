function tokensHolder() {
  function addToken(client_id, expirationTime, token) {
    this[`tokenExpirationTime_${client_id}`] =
      new Date().getTime() + expirationTime * 1000;
    this[`token_${client_id}`] = token;
  }

  function getToken(client_id) {
    if (this[`tokenExpirationTime_${client_id}`] > new Date().getTime()) {
      return this[`token_${client_id}`];
    }

    return null;
  }

  return {
    addToken,
    getToken
  };
}

export default tokensHolder();
