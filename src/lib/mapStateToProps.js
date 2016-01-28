export default function(...props) {
  return function(state) {
    return props.reduce(function(prev, next) {
      prev[next] = state[next];
      return prev;
    }, {});
  };
}
