import {handleActions} from 'redux-actions';
import {App} from '~/models/AppModel';

export const INIT_PROCESSING = 'INIT_PROCESSING';
export const SUCCESS_PROCESS_COMPLETION = 'SUCCESS_PROCESS_COMPLETION';
export const ERROR_PROCESS_COMPLETION = 'ERROR_PROCESS_COMPLETION';
export const SCREEN_TRANSITION = 'SCREEN_TRANSITION';
export const SCREEN_TRANSITION_SERVICE = 'SCREEN_TRANSITION_SERVICE';
export const SCREEN_TRANSITION_COMPLETE_SERVICE =
  'SCREEN_TRANSITION_COMPLETE_SERVICE';
export const OPEN_NOTICE_SNACK_BAR = 'OPEN_NOTICE_SNACK_BAR';
export const CLOSE_NOTICE_SNACK_BAR = 'CLOSE_NOTICE_SNACK_BAR';

export const screenTransition = path => ({
  type: SCREEN_TRANSITION,
  path,
});
export const screenTransitionComplete = () => ({
  type: SCREEN_TRANSITION_COMPLETE_SERVICE,
});
export const closeSnackBar = () => ({
  type: CLOSE_NOTICE_SNACK_BAR,
});

const initialState = {
  app: new App (),
};

const appState = handleActions (
  {
    [INIT_PROCESSING]: state => ({
      ...state,
      app: state.app.set ('loading', true).set ('errorMessage', ''),
    }),
    [SUCCESS_PROCESS_COMPLETION]: state => ({
      ...state,
      app: state.app.set ('loading', false).set ('errorMessage', ''),
    }),
    [ERROR_PROCESS_COMPLETION]: (state, action) => ({
      ...state,
      app: state.app
        .set ('loading', false)
        .set ('errorMessage', action.payload.errorMessage),
    }),
    [SCREEN_TRANSITION_SERVICE]: (state, action) => ({
      ...state,
      app: state.app.set ('transitionOrder', action.path),
    }),
    [SCREEN_TRANSITION_COMPLETE_SERVICE]: state => ({
      ...state,
      app: state.app.set ('transitionOrder', undefined),
    }),
    [OPEN_NOTICE_SNACK_BAR]: state => ({
      ...state,
      app: state.app.set ('openErrorBar', true),
    }),
    [CLOSE_NOTICE_SNACK_BAR]: state => ({
      ...state,
      app: state.app.set ('openErrorBar', false),
    }),
  },
  initialState
);

export default appState;
