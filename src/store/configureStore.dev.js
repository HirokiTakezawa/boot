import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware, {END} from 'redux-saga';
import DevTools from '~/components/dev/DevTools';
import rootReducer from '~/modules';
import createHistory from 'history/createBrowserHistory';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import immutableTransform from 'redux-persist-transform-immutable';
import models from '~/models';

const persistConfig = {
  transforms: [immutableTransform ({records: models})],
  key: 'root',
  storage,
  whitelist: ['authState', 'localeState'],
};

export function configureStore (initialState) {
  const history = createHistory ({basename: '/'});
  const middleware = routerMiddleware (history);
  const sagaMiddleware = createSagaMiddleware ();
  const logger = createLogger ();
  const persistedReducer = persistReducer (persistConfig, rootReducer);

  const store = createStore (
    connectRouter (history) (persistedReducer),
    initialState,
    compose (
      applyMiddleware (middleware, sagaMiddleware, logger),
      DevTools.instrument ()
    )
  );

  let persistor = persistStore (store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept ('../modules', () => {
      const nextRootReducer = require ('../modules').default;
      store.replaceReducer (nextRootReducer);
    });
  }
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch (END);
  return {store, persistor, history};
}
