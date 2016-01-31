const name = 'TESTS';
export const SET_STATUS = `${name}_SET_STATUS`;

export function setStatus(id, status) {
  return {type: SET_STATUS, id, status};
}
