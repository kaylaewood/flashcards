const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess and Card object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card, 'object');
    expect(turn.card).to.equal(card);
    expect(turn.guess).to.equal('object');
  });

  describe('returnGuess', function() {

    it('should be a function', function() {
      const turn = new Turn();
      expect(turn.returnGuess).to.be.a('function');
    });

    it('should return guess string', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn(card, 'object');
      expect(turn.returnGuess()).to.equal('object');
    });

  });

  describe('returnCard', function() {

    it('should be a function', function() {
      const turn = new Turn();
      expect(turn.returnCard).to.be.a('function');
    });

    it('should return card object', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn(card, 'object');
      expect(turn.returnCard()).to.equal(card);
    });

  });

  describe('evaluateGuess', function() {

    it('should be a function', function() {
      const turn = new Turn();
      expect(turn.evaluateGuess).to.be.a('function');
    });

    it('should return boolean based on guess', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn1 = new Turn(card, 'array');
      const turn2 = new Turn(card, 'object');
      expect(turn1.evaluateGuess()).to.equal(false);
      expect(turn2.evaluateGuess()).to.equal(true);
    });

  });

  describe('giveFeedback', function() {

    it('should be a function', function() {
      const turn = new Turn();
      expect(turn.giveFeedback).to.be.a('function');
    });

    it('should return feedback phrase', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn1 = new Turn(card, 'array');
      const turn2 = new Turn(card, 'object');
      expect(turn1.giveFeedback()).to.equal('incorrect!');
      expect(turn2.giveFeedback()).to.equal('correct!');
    });

  });

});
