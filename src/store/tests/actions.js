const name = 'TESTS';
export const SET_STATUS = `${name}_SET_STATUS`;
export const SET_TESTS = `${name}_SET_TESTS`;

export function setStatus(id, status) {
  return {type: SET_STATUS, id, status};
}

export function setTests(tests) {
  return {type: SET_TESTS, tests};
}
