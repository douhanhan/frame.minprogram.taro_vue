import { createApp } from 'vue';
import { store } from '@stores/index';
import request from './request.js';
import '@assets/styles/iconfont/iconfont.css';
import './app.less';

const app = createApp({
  onShow() {},
});

request.onLaunch();
app.use(store);
app.provide('request', request);

export default app;
