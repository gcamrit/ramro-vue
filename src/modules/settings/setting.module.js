import routes from './routes';
import store from './store';

class SettingModule {
  static name() {
    return 'SettingModule';
  }
  static getRoutes() {
    return routes;
  }

  static getStore() {
    return store;
  }
}

export default SettingModule;
