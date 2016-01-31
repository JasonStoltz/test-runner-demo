import {connect} from 'react-redux';
import {List} from 'immutable';
import React from 'react';
import Promise from 'bluebird';
import PureComponent from 'react-pure-render/component';

import mapStateToProps from './lib/mapStateToProps';
import mapDispatchToProps from './lib/mapDispatchToProps';

import * as actions from './store/tests/actions';

import Test from './model/test';

import Tests from './components/runner/tests.react.js';

@connect(mapStateToProps('tests'), mapDispatchToProps(actions))
export default class App extends PureComponent {
  static propTypes = {
    tests: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  constructor() {
    super();
  }

  render() {
    const {tests} = this.props;

    return (
      <div>
        <h1>Tests</h1>
        <Tests tests={tests.get('tests')} />
      </div>
    );
  }

  componentDidMount() {
    const {actions} = this.props;
    const tests = Test.all();
    actions.setTests(tests);
  }
}