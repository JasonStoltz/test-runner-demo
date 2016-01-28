import React from 'react';
import PureComponent from 'react-pure-render/component';
import {connect} from 'react-redux';
import mapStateToProps from './lib/mapStateToProps';
import mapDispatchToProps from './lib/mapDispatchToProps';


@connect(mapStateToProps('tests'))
export default class App extends PureComponent {
  static propTypes = {
    tests: React.PropTypes.object.isRequired
  };

  render() {
    debugger;
    return (
      <h1>Hello, world.</h1>
    );
  }
}
