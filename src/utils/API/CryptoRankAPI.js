import axios from 'axios';

export const getTrendingCoins = async () => {
  const json = await axios('https://api.cryptorank.io/v0/coins/trending/by-clicks?dateFrom=2022-11-11&limit=8&locale=en')
    .then((response) => response)
    .catch(() => 'error');
  return json
}

export const getExchanges = async () => {
  const json = await axios('https://api.cryptorank.io/v0/exchanges')
    .then((response) => response)
    .catch(() => 'error');
  return json
}