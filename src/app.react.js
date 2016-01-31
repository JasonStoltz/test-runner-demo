import {connect} from 'react-redux';
import {List} from 'immutable';
import React from 'react';
import Promise from 'bluebird';
import PureComponent from 'react-pure-render/component';
import TestsService from './model/test';

import mapStateToProps from './lib/mapStateToProps';
import mapDispatchToProps from './lib/mapDispatchToProps';

import * as actions from './store/tests/actions';

import * as TestConstants from './model/test';
import Test from './model/test';
import * as TestsConstants from './store/tests/reducers';

import Tests from './components/runner/tests.react.js';
import Status from './components/runner/status.react';

@connect(mapStateToProps('tests'), mapDispatchToProps(actions))
export default class App extends PureComponent {
  static propTypes = {
    tests: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.run = this.run.bind(this); //So we don't break pure render
  }

  render() {
    const {tests} = this.props;

    return (
      <div>
        <div>
          <h1>Tests</h1>
          {tests.get('status') === TestsConstants.FINISHED &&
            <div>FINISHED!</div>
          }
          <Tests tests={tests.get('tests')} />
          <div>
            <button onClick={this.run} disabled={tests.get('status') === TestsConstants.RUNNING}>Run</button>
          </div>
          <Status
            running={tests.get('running')}
            failed={tests.get('failed')}
            passed={tests.get('passed')}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const {actions} = this.props;
    const tests = Test.all();
    actions.setTests(tests);
  }

  run(e) {
    e.preventDefault();

    const {actions} = this.props;
    const tests = this.props.tests.get('tests');

    tests.forEach(test => {
      actions.setStatus(test.get('id'), TestConstants.RUNNING);
      TestsService.run(test.get('id')).then(result => {
        actions.setStatus(test.get('id'), (result) ? TestConstants.PASSED : TestConstants.FAILED);
      });
    });
  }
}
