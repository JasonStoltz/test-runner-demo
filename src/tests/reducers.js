import {Map, List} from 'immutable';

const initialState = new Map({
  tests: new List()
});

export default function(state = initialState, action) {
  return state;
}
