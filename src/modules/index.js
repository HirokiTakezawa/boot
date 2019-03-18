import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

import appState from './appState';
import localeState from './localeState';

const rootReducer = (history) => combineReducers ({
  router: connectRouter(history),
  appState,
  localeState,
});

export default rootReducer;
