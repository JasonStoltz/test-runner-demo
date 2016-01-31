import React from 'react';
import PureComponent from '../../../node_modules/react-pure-render/component';

export default class Tests extends PureComponent {
  static propTypes = {
    tests: React.PropTypes.object.isRequired
  };

  constructor() {
    super();
  }

  render() {
    const {tests} = this.props;

    return (
      <div>
        {tests.map(test => {
          return (
            <div key={test.get('id')}>
              <h2>{test.get('description')}</h2>
              <dl>
                <dt>Status:</dt>
                <dd>{test.get('status')}</dd>
              </dl>
            </div>
          );
        })}
      </div>
    );
  }
}
