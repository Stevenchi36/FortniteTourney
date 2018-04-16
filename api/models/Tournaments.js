/**
 * Tournaments.js
 *
 * @description :: Information about each tournament that is going to be held.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    platform: {
      type: 'string',
    },
    gameType: {
      type: 'string',
    },
    time: {
      type: 'string',
    },
    maxTeams: {
      type: 'number',
    },
    completed: {
      type: 'string',
    }
  }
};

