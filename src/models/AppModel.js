import { Record } from 'immutable';

const AppRecord = Record(
  {
    loading: false,
    errorMessage: '',
    transitionOrder: '',
    openErrorBar: false,
  },
  'App'
);

export class App extends AppRecord {}
