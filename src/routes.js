export const menuItem = [
  {
    type: 'noncollapsible',
    path: '/',
    key: 'cryptocurrencies',
    name: 'კრიპტოვალუტები',
    animation: ''
  },
  {
    type: 'noncollapsible',
    path: '/exchanges',
    key: 'exchanges',
    name: 'ბირჟები',
    animation: ''
  },
  {
    type: 'noncollapsible',
    path: '/news',
    key: 'news',
    name: 'სიახლეები',
    animation: 'ping'
  },
  {
    type: 'collapsible',
    path: '/',
    key: 'other',
    name: 'სხვა',
    collapse: [
      {
        name: 'NFT',
        key: 'nft',
        path: '/nft',
        isActive: false,
      },
      {
        name: 'საფულის შემოწმება',
        key: 'wallet',
        path: '/wallet',
        isActive: false,
      },
    ]
  }
]