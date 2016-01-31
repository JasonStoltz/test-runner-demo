import React from 'react';
import PureComponent from '../../../node_modules/react-pure-render/component';

export default class Tests extends PureComponent {
  static propTypes = {
    passed: React.PropTypes.number.isRequired,
    failed: React.PropTypes.number.isRequired,
    running: React.PropTypes.number.isRequired
  };

  constructor() {
    super();
  }

  render() {
    const {passed, failed, running} = this.props;

    return (
      <div>
        <dl>
          <dt>Passed:</dt><dd>{passed}</dd>
          <dt>Running:</dt><dd>{running}</dd>
          <dt>Failed:</dt><dd>{failed}</dd>
        </dl>
      </div>
    );
  }
}
