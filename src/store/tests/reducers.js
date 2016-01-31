import {Map, List} from 'immutable';
import {SET_STATUS, SET_TESTS} from './actions';

const initialState = new Map({
  tests: new List()
});

export default function(state = initialState, action) {

  switch (action.type) {
    case SET_STATUS:
      return state.update('tests', tests => {
        return tests.map(t => {
          if (t.get('id') === action.id) {
            return t.set('state', action.status);
          }

          return t;
        })
      });

    case SET_TESTS:
      return state.set('tests', action.tests);

    default:
      return state;
  }
}