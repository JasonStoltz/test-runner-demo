import React from 'react';
import PureComponent from 'react-pure-render/component';

import Tests from './components/tests.react';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>Tests</h1>
        <Tests />
      </div>
    );
  }
}
