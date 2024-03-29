export default defineAppConfig({
  pages: [
    'pages/App/index',
    'pages/ProductDetail/index',
    'pages/WebViewComp/index'
  ],
  entryPagePath: "pages/App/index",
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '甲骨文酒文化',
    navigationBarTextStyle: 'black'
  }
});
