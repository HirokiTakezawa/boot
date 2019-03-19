import { handleActions } from 'redux-actions';
import { Locale } from '~/models/LocaleModel';

export const CHANGE_LOCALE = 'CHANGE_LOCALE';
export const CHANGE_LOCALE_SAVE_STATE = 'CHANGE_LOCALE_SAVE_STATE';

// export const sampleAction = params => ({
//   type: FOO_TYPE,      // must
//   payload: {object},   // optional
//   meta: {object},      // optional
//   error: false, true, undefined, null, ... // optional
// });

export const changeLocale = code => ({
  type: CHANGE_LOCALE,
  payload: { locale: code },
});

const initialState = {
  locale: new Locale({
    code: 'en',
  }),
};

const localeState = handleActions(
  {
    [CHANGE_LOCALE_SAVE_STATE]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState
);

export default localeState;
