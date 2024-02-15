export default {
  pages: ['pages/personal.center/index'],
  subpackages: [
    {
      root: 'pages.sub/index',
      pages: ['index'],
    },
    {
      root: 'pages.sub/theme',
      pages: ['index'],
    },
    {
      root: 'pages.sub/edit',
      pages: ['index'],
    },
    {
      root: 'pages.sub/record',
      pages: ['add/index', 'show/index'],
    },
    {
      root: 'pages.sub/message',
      pages: ['index'],
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
    disableScroll: true,
  },
};
