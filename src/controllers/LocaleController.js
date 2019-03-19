import { call, takeEvery } from 'redux-saga/effects';

import LocaleChangeService from '~/services/locale/LocaleChangeService';
import * as Actions from '~/modules/LocaleState';

function* changeLocale(action) {
  yield call(LocaleChangeService.run, action);
}

export const LocaleController = [
  takeEvery(Actions.CHANGE_LOCALE, changeLocale),
];

export default LocaleController;
