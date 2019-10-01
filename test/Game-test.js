const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Game', function() {

  it('Game should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('start should be a function', function() {
    const game = new Game();
    expect(game.start).to.be.a('function');
  });

  it('should keep track of current round', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.a.instanceof(Round);
  });

});

// start: method that starts everything
  // invokes printMessage to display the message in the CLI
  // invokes printQuestion to kick off our helper functions that allow interaction via the CLI
