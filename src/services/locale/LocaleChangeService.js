import {put} from 'redux-saga/effects';
import {Locale} from '~/models/LocaleModel';
import * as AppActions from '~/modules/appState';
import * as LocaleActions from '~/modules/localeState';

function* run (action) {
  let locale = new Locale ({
    code: action.payload.locale,
  });
  yield put ({
    type: LocaleActions.CHANGE_LOCALE_SAVE_STATE,
    payload: {locale: locale},
  });
  yield put ({type: AppActions.SUCCESS_PROCESS_COMPLETION});
}

const LocaleChangeService = {
  run: run,
};

export default LocaleChangeService;
