import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appState from './AppState';
import localeState from './LocaleState';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    appState,
    localeState,
  });

export default rootReducer;
