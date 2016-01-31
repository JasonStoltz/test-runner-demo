import {fromJS, Record} from 'immutable';
import Promise from 'bluebird';
import {Store} from './data';

/*
 Interface for interacting with our theoretically external
 */
export default {
  all() {
    return fromJS((Store.getTests().map(t => {
      return new Test({
        id: t.id,
        description: t.description
      })
    })));
  },

  run(id) {
    return new Promise((resolve, reject) => {
      Store.runTest(id, result => {
        resolve(result);
      });
    });
  }
}

export const Test = Record({
  id: '',
  status: 'Not Running',
  description: ''
});