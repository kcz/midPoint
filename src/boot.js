import { store } from './store';
import authActions from './pages/Common/Auth/actions';

export default () =>
  new Promise(() => {
    store.dispatch(authActions.checkAuthorization());
  });
