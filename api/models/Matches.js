/**
 * Matches.js
 *
 * @description :: Holds information for each match that is being played along with what tournament it is a part of.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    team1: {
      model: 'teams'
    },
    team2: {
      model: 'teams'
    },
    tournamentID: {
      model: 'tournaments'
    },
    score1: {
      type: 'integer'
    },
    score2: {
      type: 'integer'
    },
    winner: {
      type: 'string'
    }
  }
};

