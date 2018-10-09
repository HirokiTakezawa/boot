import {Record} from 'immutable';

const LocaleRecord = Record (
  {
    code: '',
  },
  'Locale'
);

export class Locale extends LocaleRecord {
  constructor (obj) {
    super (obj);
  }
}
