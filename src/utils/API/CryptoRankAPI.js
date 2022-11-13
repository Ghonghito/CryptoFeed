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

export const getNews = async () => {
  const json = await axios('https://api.cryptorank.io/v0/news?lang=en&limit=50&offset=0&sourceIds=28,7,23,33,37,24,39,4,20,32,12,34,25,6,11,1,27,9,14,3,22,42,2,36,5,19,40,21,8,18')
    .then((response) => response)
    .catch(() => 'error');
  return json
}