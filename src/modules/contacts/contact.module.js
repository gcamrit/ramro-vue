import routes from './routes';
import store from './store';

class ClientModule {
  static name() {
    return 'ClientModule';
  }
  static getRoutes() {
    return routes;
  }

  static getStore() {
    return store;
  }
}

export default ClientModule;
