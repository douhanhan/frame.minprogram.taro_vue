import { defineStore } from 'pinia';
import Taro from '@tarojs/taro';

interface GlobalState {
  theme: string;
  navIndex: number;
  systemInfo: object;
}

interface Heights {
  navbar: string;
  window: string;
  [key: string]: string | number | object;
}

export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    navIndex: 3,
    systemInfo: {},
    theme: '@orange',
  }),
  getters: {
    getTheme(): string {
      return this.theme;
    },
    getHeights(): Heights {
      const { getSystemInfoSync } = Taro;
      this.systemInfo = getSystemInfoSync();
      const { screenHeight, windowHeight, safeArea } = this.systemInfo;
      let safeAreaBottom = screenHeight - safeArea.bottom;
      return {
        window: `${windowHeight}px`,
        navbar: `${safeArea.top * 2}px`,
        safeAreaBottom: `${safeAreaBottom}px`,
        container: `${safeArea.height - safeAreaBottom}px`,
      };
    },
  },
  actions: {
    setTheme(color: string) {
      this.theme = color;
    },
    resetState() {
      this.navIndex = 2;
      this.systemInfo = {};
      this.theme = '@orange';
    },
  },
});
