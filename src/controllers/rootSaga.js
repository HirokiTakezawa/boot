import { all } from 'redux-saga/effects';

import LocaleController from './LocaleController';

function* rootSaga() {
  yield all([...LocaleController]);
}

export default rootSaga;
