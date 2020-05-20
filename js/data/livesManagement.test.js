import {assert} from 'chai';
import livesManagement from "./livesManagement";

describe(`checkLives`, () => {
  describe(`should return -1 when an answer is wrong and lives equals 0`, () => {
    it(`should return -1`, () => {
      assert.equal(-1, livesManagement(0, [0, 20]));
    });
  });
  describe(`should return 2 lives when times ended`, () => {
    it(`should return 2`, () => {
      assert.equal(2, livesManagement(3, [0, 30]));
    });
  });
  describe(`should return 1 lives when an answer is wrong and lives were 2`, () => {
    it(`should return 2`, () => {
      assert.equal(2, livesManagement(3, [0, 10]));
    });
  });
  describe(`should return 3 lives when an answer is right`, () => {
    it(`should return 3`, () => {
      assert.equal(3, livesManagement(3, [1, 15]));
    });
  });
});
