import {connect} from 'react-redux';
import React from 'react';
import PureComponent from 'react-pure-render/component';
import mapStateToProps from '../lib/mapStateToProps';
import mapDispatchToProps from '../lib/mapDispatchToProps';
import * as actions from '../tests/actions';

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
    const tests = this.props.tests.get('tests');

    return (
      <div>
        {tests.map(test => {
          return (
            <div key={test.get('id')}>
              <h2>{test.get('description')}</h2>
              <dl>
                <dt>Status:</dt>
                <dd>{test.get('state')}</dd>
              </dl>
              <button onClick={this.run} value={test.get('id')}>Run</button>
            </div>
          );
        })}
      </div>
    );
  }

  run(e) {
    e.preventDefault();
    const {actions} = this.props;
    const tests = this.props.tests.get('tests');
    const id = e.target.getAttribute('value');
    const test = tests.find(t => t.get('id') === id);

    if (!test) console.error(`Received a bad test id ${id}`);

    actions.setStatus(id, 'Running');

    //test.run((r) => { //TODO THis is where i left off
    //  if (r) {
    //    actions.setStatus(id, 'Passed');
    //  } else {
    //    actions.setStatus(id, 'Failed');
    //  }
    //})
  }
}