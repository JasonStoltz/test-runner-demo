const name = 'TESTS';
export const SET_STATUS = `${name}_SET_STATUS`;
export const SET_TESTS = `${name}_SET_TESTS`;

/**
 *
 * Update the status of a target test in the tests collection
 *
 * @param id
 * @param status
 * @returns {{type: *, id: *, status: *}}
 */
export function setStatus(id, status) {
  return {type: SET_STATUS, id, status};
}

/**
 *
 * Set tests collection in store
 *
 * @param tests
 * @returns {{type: *, tests: *}}
 */
export function setTests(tests) {
  return {type: SET_TESTS, tests};
}
