// var assert = require('chai').assert;
// var solution = require('../solution');
var assert = chai.assert;

describe('Poker Hand', function() {
  describe('functions', function() {
 
    var hand = ['1d', '2h', '2s', '10c', '3c'];

    it('should return the numeric value of the hand', function() {
      assert.deepEqual(valueArrayF(hand), [14, 2, 2, 10, 3] );
    });
 
    it('should return the suite of the hand', function() {
      assert.deepEqual(suiteArrayF(hand), ['d', 'h', 's', 'c', 'c'] );

    });

    it('should return the sorted value of the hand', function() {
      assert.deepEqual(sortedValueArrayF([14, 2, 2, 10, 3]), [2, 2, 3, 10, 14] );
    });

    it('should return true if all suite is same', function() {
      assert.isTrue(isFlush(['d', 'd', 'd', 'd', 'd']));
    });

    it('should return false if all suite are not same', function() {
      assert.isFalse(isFlush(['d', 'd', 'c', 'd', 'd']));
    });

    it('should return true if there is a straight', function() {
      assert.isTrue(isStraight([10, 11, 12, 13, 14]));
    });

    it('should return false if no straight found', function() {
      assert.isFalse(isStraight([2, 3, 4, 5, 5]));
    });

    it('should return true if there is a straight royal flush', function() {
      assert.isTrue(isStraightRoyalFlush([10, 11, 12, 13, 14], ['d', 'd', 'd', 'd', 'd']));
    });

    it('should return false if no straight found royal flush', function() {
      assert.isFalse(isStraightRoyalFlush([2, 3, 4, 5, 6], ['d', 'd', 'd', 'd', 'd']));
    });

    it('should return true if there is a straight flush', function() {
      assert.isTrue(isStraightFlush([9, 10, 11, 12, 13], ['d', 'd', 'd', 'd', 'd']));
    });

    it('should return false if no straight flush', function() {
      assert.isFalse(isStraightFlush([2, 3, 4, 5, 6], ['d', 'c', 'd', 'd', 'd']));
    });

    it('should return an object containing the number of kinds in a hand', function() {
      assert.deepEqual(nOfAKind([2, 3, 3, 5, 6]), {3: 2});
    });

    it('should return an object containing the number of kinds in a hand', function() {
      assert.deepEqual(nOfAKind([3, 3, 3, 5, 5]), {3: 3, 5: 2});
    });

    it('should return true if the number of kinds in a hand is 4', function() {
      assert.isTrue(fourOfAKind([3, 5, 5, 5, 5]));
    });

    it('should return true if the number of kinds in a hand is 3 and 2', function() {
      assert.isTrue(twoAndThreeOfAKind([3, 3, 5, 5, 5]));
    });

    it('should return false if the number of kinds in a hand is 2 and 2', function() {
      assert.isFalse(twoAndThreeOfAKind([3, 3, 5, 5, 13]));
    });

    it('should return true if the number of kinds in a hand is 3', function() {
      assert.isTrue(threeOfAKind([3, 3, 5, 5, 5]));
    });

    it('should return true if the number of kinds in a hand is 2 and 2', function() {
      assert.isTrue(twoAndTwoOfAKind([3, 3, 5, 5, 6]));
    });

    it('should return true if the number of kinds in a hand is 2', function() {
      assert.isTrue(twoOfAKind([3, 3, 5, 5, 5]));
    });

    it('should return the highest value card', function() {
      assert.equal(highestCard([3, 3, 5, 5, 14]), 'A');
    });
  });
  describe('results', () => {

    it('should return highest card given the hand', () => {
      assert.equal(result(['1d', '2h', '12s', '10c', '3c']), "Hand is: Highest card is A")
    });

    it('should return a single pair given the hand', () => {
      assert.equal(result(['1d', '2h', '12s', '12c', '3c']), "Hand is: One pair")
    });

    it('should return straight given the hand', () => {
      assert.equal(result(['1d', '10h', '11s', '12c', '13c']), "Hand is: Straight")
    });

    it('should return flush given the hand', () => {
      assert.equal(result(['1d', '9d', '5d', '11d', '12d']), "Hand is: Flush")
    });

  });
});