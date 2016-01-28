import {Map} from 'immutable';
import {bindActionCreators} from 'redux';

export default function mapDispatchToProps(...actions) {
  return function(dispatch) {
    const creators = Map()
        .merge(...actions)
        .filter(value => typeof value === 'function')
        .toObject();

    return {
      actions: bindActionCreators(creators, dispatch),
      dispatch
    };
  };
}
