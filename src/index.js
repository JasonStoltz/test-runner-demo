import {fromJS} from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './app.react';
import {createStore} from 'redux'
import reducers from './reducers';

const store = createStore(reducers, {
  tests: fromJS({
    tests: [
      {
        id: '1',
        state: 'Not Started Yet',
        description: 'commas are rotated properly',
        run: generateDummyTest()
      },
      {
        id: '2',
        state: 'Not Started Yet',
        description: 'exclamation points stand up straight',
        run: generateDummyTest()
      },
      {
        id: '3',
        state: 'Not Started Yet',
        description: 'run-on sentences don\'t run forever',
        run: generateDummyTest()
      },
      {
        id: '4',
        state: 'Not Started Yet',
        description: 'question marks curl down, not up',
        run: generateDummyTest()
      },
      {
        id: '5',
        state: 'Not Started Yet',
        description: 'semicolons are adequately waterproof',
        run: generateDummyTest()
      },
      {
        id: '6',
        state: 'Not Started Yet',
        description: 'capital letters can do yoga',
        run: generateDummyTest()
      }
    ]
  })
});

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

function generateDummyTest() {
  var delay = 7000 + Math.random() * 7000;
  var testPassed = Math.random() > 0.5;

  return function(callback) {
    setTimeout(function() {
      callback(testPassed);
    }, delay);
  };
}
