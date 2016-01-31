function generateDummyTest() {
  var delay = 7000 + Math.random() * 7000;
  var testPassed = Math.random() > 0.5;

  return function(callback) {
    setTimeout(function() {
      console.log(testPassed);
      callback(testPassed);
    }, delay);
  };
}

const tests = [
  {
    id: '1',
    description: 'commas are rotated properly',
    run: generateDummyTest()
  },
  {
    id: '2',
    description: 'exclamation points stand up straight',
    run: generateDummyTest()
  },
  {
    id: '3',
    description: 'run-on sentences don\'t run forever',
    run: generateDummyTest()
  },
  {
    id: '4',
    description: 'question marks curl down, not up',
    run: generateDummyTest()
  },
  {
    id: '5',
    description: 'semicolons are adequately waterproof',
    run: generateDummyTest()
  },
  {
    id: '6',
    description: 'capital letters can do yoga',
    run: generateDummyTest()
  }
];

/* This mocks whatever data source our front end is querying to find tests to run */
export const Store = {
  getTests() {
    return tests.map(t => {
      return {
        id: t.id,
        description: t.description
      }
    });
  },

  runTest(id, callback) {
    const test = tests.find(t => t.id === id);
    return test.run(callback);
  }
};