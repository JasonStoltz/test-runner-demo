import {Map, List} from 'immutable';
import chai from 'chai';
const expect = chai.expect;

import reduce from '../../../src/store/tests/reducers';
import * as actions from '../../../src/store/tests/actions';
import {Test, PASSED, FAILED, NOT_STARTED_YET, RUNNING} from '../../../src/model/test';
import * as TestConstants from '../../../src/store/tests/reducers';

describe('Tests reducer', function() {
  describe('SET_STATUS', function () {

    const initialState = new Map({
      tests: new List([
        new Test({
          id: '1',
          status: NOT_STARTED_YET
        }),
        new Test({
          id: '2',
          status: NOT_STARTED_YET
        }),
        new Test({
          id: '2',
          status: NOT_STARTED_YET
        })
      ])
    });

    describe('When status is valid', function() {
      it('should find the corresponding test and update it\'s status', function () {
        const state = reduce(initialState,  {
          type: actions.SET_STATUS,
          id: '1',
          status: PASSED
        });

        expect(state.get('tests').first().get('status')).to.equal(PASSED);

      });

      it('should update the total number of passed tests', function () {
        const state = reduce(initialState,  {
          type: actions.SET_STATUS,
          id: '1',
          status: PASSED
        });

        expect(state.get('passed')).to.equal(1);
        expect(state.get('failed')).to.equal(0);
        expect(state.get('running')).to.equal(0);
      });

      it('should update the total number of failed tests', function () {
        const state = reduce(initialState,  {
          type: actions.SET_STATUS,
          id: '1',
          status: FAILED
        });

        expect(state.get('passed')).to.equal(0);
        expect(state.get('failed')).to.equal(1);
        expect(state.get('running')).to.equal(0);
      });

      it('should update the total number of running tests', function () {
        const state = reduce(initialState,  {
          type: actions.SET_STATUS,
          id: '1',
          status: RUNNING
        });

        expect(state.get('passed')).to.equal(0);
        expect(state.get('failed')).to.equal(0);
        expect(state.get('running')).to.equal(1);
      });

      describe('when at least 1 test is running', function() {
        it('should update the test suite status to running', function () {
          const state = reduce(initialState,  {
            type: actions.SET_STATUS,
            id: '1',
            status: RUNNING
          });

          expect(state.get('status')).to.equal(TestConstants.RUNNING);
        })
      });

      describe('when no tests are running', function() {
        it('should update the test suite status to finished', function () {
          const state = reduce(initialState,  {
            type: actions.SET_STATUS,
            id: '1',
            status: FAILED
          });

          expect(state.get('status')).to.equal(TestConstants.FINISHED);
        })
      })

    });

    describe('When status is not valid', function() {
      it('should not update the test status', function () {
        const state = reduce(initialState,  {
          type: actions.SET_STATUS,
          id: '1',
          status: 'NOT VALID'
        });

        expect(state.get('tests').first().get('status')).to.equal(NOT_STARTED_YET);

      });
    })
  });
});