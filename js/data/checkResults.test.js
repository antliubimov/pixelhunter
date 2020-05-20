import {assert} from 'chai';
import checkResults from './checkResults';

describe(`checkResults`, () => {
  describe(`quantity`, () => {
    it(`should return -1 when the quantity of answers less 10`, () => {
      assert.equal(-1, checkResults([[0, 10], [0, 15], [0, 20]], 0));
    });
  });
  describe(`middle time and 3 lives`, () => {
    it(`should return 1150 points`, () => {
      assert.equal(1150, checkResults([[1, 15], [1, 15], [1, 15], [1, 15], [1, 15], [1, 15], [1, 15], [1, 15], [1, 15], [1, 15]], 3));
    });
  });
  describe(`time of every answer < 10s and 3 lives`, () => {
    it(`should return 1650 points`, () => {
      assert.equal(1650, checkResults([[1, 2], [1, 5], [1, 8], [1, 9], [1, 4], [1, 5], [1, 1], [1, 9], [1, 5], [1, 5]], 3));
    });
  });
  describe(`time of every answer > 20s and 0 lives`, () => {
    it(`should return 350 points`, () => {
      assert.equal(350, checkResults([[1, 22], [1, 25], [1, 28], [1, 29], [1, 24], [1, 25], [1, 21], [0, 29], [0, 25], [0, 25]], 0));
    });
  });
  describe(`50%-fast answers and 50%-slow answers, 2 lives`, () => {
    it(`should return 1050 points`, () => {
      assert.equal(1050, checkResults([[1, 2], [1, 5], [1, 8], [1, 9], [1, 4], [1, 25], [1, 21], [1, 29], [1, 25], [0, 25]], 2));
    });
  });
});

