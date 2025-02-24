const siteConfig = {
  siteName: 'MindzAdmin',
  siteIcon: 'ion-flash',
  runWithMockServer: false,
  gtmId: 'UA-125865103-2',
  tokenSalt: 'm$ndzAdm$n',
  copyrightYear: 2019,
};

const themeConfig = {
  sider: {
    '@msa-layout-sider-background': '#011529',
    '@msa-layout-sider-menu-background': '#011529',
    '@msa-layout-sider-submenu-background': '#011529',
  },
  header: {
    '@msa-layout-header-background': '#011529',
  },
  logo: {
    '@msa-header-logo-background': '#011529',
  },
};

const exceptions = {
  403: {
    img: '/images/wZcnGqRDyhPOEYFcZDnb.svg',
    title: '403',
    desc: 'Sorry, you do not have permission to access this page',
  },
  404: {
    img: '/images/KpnpchXsobRgLElEozzI.svg',
    title: '404',
    desc: 'Sorry, the page you visited does not exist',
  },
  500: {
    img: '/images/RVRUAYdCGeYNBWoKiIwB.svg',
    title: '500',
    desc: 'Sorry, some issue in server',
  },
};

const newEntities = {
  contacts: {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    avatar: '',
    favorite: false,
    position_title: '',
    phone: '',
    gender: '',
    id: 0,
  },
  products: {
    name: '',
    description: '',
    price: '',
    image: '',
    thumbnails: [],
    id: 0,
  },
};

const avatarList = [
  {
    for: 'male',
    photo: 'https://randomuser.me/api/portraits/men/58.jpg',
  },
  {
    for: 'male',
    photo: 'https://d3iw72m71ie81c.cloudfront.net/male-16.jpg',
  },
  {
    for: 'male',
    photo:
      'https://images.pexels.com/photos/47080/boy-african-africa-child-47080.jpeg?h=350&auto=compress&cs=tinysrgb',
  },
  {
    for: 'male',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTUzNTYwNjE0N15BMl5BanBnXkFtZTcwMjc0ODM1Mw@@._V1_UY256_CR15,0,172,256_AL_.jpg',
  },
  {
    for: 'male',
    photo: 'https://d3iw72m71ie81c.cloudfront.net/male-82.jpg',
  },
  {
    for: 'male',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIyOTc0MjE5NV5BMl5BanBnXkFtZTcwNjgyODQwMg@@._V1_UY256_CR6,0,172,256_AL_.jpg',
  },
  {
    for: 'male',
    photo: 'https://d3iw72m71ie81c.cloudfront.net/male-20.jpg',
  },
  {
    for: 'male',
    photo: 'https://d3iw72m71ie81c.cloudfront.net/male-10.jpg',
  },
  {
    for: 'male',
    photo: 'https://d3iw72m71ie81c.cloudfront.net/male-58.jpg',
  },
  {
    for: 'male',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0MjAwOTMzMF5BMl5BanBnXkFtZTcwMDg1MjEyNw@@._V1_UY256_CR2,0,172,256_AL_.jpg',
  },
  {
    for: 'female',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTcxMjg0OV5BMl5BanBnXkFtZTgwMjg1Mjg1NDE@._V1_UX172_CR0,0,172,256_AL_.jpg',
  },
  {
    for: 'female',
    photo:
      'https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=bb760141eca5719417b4c3d8177c003b',
  },
  {
    for: 'female',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
  },
  {
    for: 'female',
    photo:
      'https://images.pexels.com/photos/590415/pexels-photo-590415.jpeg?h=350&auto=compress&cs=tinysrgb',
  },
  {
    for: 'female',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTE2MTM5NzUwOF5BMl5BanBnXkFtZTgwMDQ1NjgxNjE@._V1_UY256_CR61,0,172,256_AL_.jpg',
  },
  {
    for: 'female',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZWE5ZDlmOTUtY2M3MC00MjhmLTgyMjQtMjllMDJiMDE0NGFjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX172_CR0,0,172,256_AL_.jpg',
  },
  {
    for: 'female',
    photo:
      'https://images.pexels.com/photos/89790/beauty-woman-portrait-face-89790.jpeg?h=350&auto=compress&cs=tinysrgb',
  },
  {
    for: 'female',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMWM2ZmZmMTAtMjhlZC00Y2RkLTljOTYtODkyNjFjY2VkN2E0XkEyXkFqcGdeQXVyMTAwOTk3MjY@._V1_UX172_CR0,0,172,256_AL_.jpg',
  },
  {
    for: 'female',
    photo:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4ODU5MDY4MV5BMl5BanBnXkFtZTgwODY1MjQ5MDI@._V1_UX172_CR0,0,172,256_AL_.jpg',
  },
  {
    for: 'female',
    photo:
      'https://images.pexels.com/photos/264614/pexels-photo-264614.jpeg?h=350&auto=compress&cs=tinysrgb',
  },
];

const apiUrl = () => {
  return 'http://localhost:8181'; // fake server url
};

module.exports = {
  defaultLocale: 'en',
  siteConfig,
  exceptions,
  themeConfig,
  newEntities,
  avatarList,
  apiUrl,
};
