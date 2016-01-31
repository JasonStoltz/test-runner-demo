import {Map, List} from 'immutable';
import {SET_STATUS} from './actions';

const initialState = new Map({
  status: 'Not Running'
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
    default:
      return state;
  }
}