import {fromJS, Record} from 'immutable';
import Promise from 'bluebird';
import {Store} from './data';

export const RUNNING = 'Running';
export const NOT_STARTED_YET = 'Not Started Yet';
export const FAILED = 'Failed';
export const PASSED = 'Passed';

/*
 Interface for interacting with our theoretically external data source
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
  status: NOT_STARTED_YET,
  description: ''
});