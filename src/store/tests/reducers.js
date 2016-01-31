import {Map, List} from 'immutable';
import {SET_STATUS, SET_TESTS} from './actions';

import * as Test from '../../model/test';

export const NOT_RUNNING = 'Not Running';
export const RUNNING = 'Running';
export const FINISHED = 'Finished';

const initialState = new Map({
  tests: new List(),
  passed: 0,
  failed: 0,
  running: 0,
  status: NOT_RUNNING
});

export default function(state = initialState, action) {

  switch (action.type) {
    case SET_STATUS:
      state = state.update('tests', tests => {
        return tests.map(t => {
          if (t.get('id') === action.id) {
            return t.set('status', action.status);
          }

          return t;
        })
      });

      return calculateStatus(state);

    case SET_TESTS:
      return state.set('tests', action.tests);

    default:
      return state;
  }
}

function calculateStatus(state) {
  const tests = state.get('tests');
  const passed = tests.count(t => t.status === Test.PASSED);
  const failed = tests.count(t => t.status === Test.FAILED);
  const running = tests.count(t => t.status === Test.RUNNING);

  return state.set('passed', passed)
    .set('failed', failed)
    .set('running', running)
    .set('status', (running === 0) ? FINISHED : RUNNING);
}
