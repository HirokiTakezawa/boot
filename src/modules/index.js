import {combineReducers} from 'redux';

import appState from './appState';
import localeState from './localeState';

const rootReducer = combineReducers ({
  appState,
  localeState,
});

export default rootReducer;
