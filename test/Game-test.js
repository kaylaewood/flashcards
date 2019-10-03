const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {

  it('Game should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should store current round', function() {
    const game = new Game();
    expect(game.currentRound).to.equal(null);
  });

  it('should store cards', function() {
    const game = new Game();
    expect(game.cards).to.deep.equal([]);
  });

  describe('start', function() {

    it('should be a function', function() {
      const game = new Game();
      expect(game.start).to.be.a('function');
    });

    it('should push cards into cards array', function() {
      const game = new Game();
      game.start();
      expect(game.cards[1]).to.be.a.instanceof(Card);
      expect(game.cards[1].id).to.equal(prototypeQuestions[1].id);
      expect(game.cards[3].correctAnswer).to.equal(prototypeQuestions[3].correctAnswer);
    });

    it('should update currentRound with instantiated round object', function() {
      const game = new Game();
      game.start();
      expect(game.currentRound).to.be.a.instanceof(Round);
    });

  });

});
