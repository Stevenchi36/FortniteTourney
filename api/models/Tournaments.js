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
      isIn: ['PC','PS4','XB1'],
      required: true
    },
    gameType: {
      type: 'string',
      isIn: ['Solo', 'Duo']
    },
    time: {
      type: 'string',
      required: true
    },
    maxTeams: {
      type: 'number',
      defaultsto: 32
    },
    completed: {
      type: 'string',
      isIn: ['true', 'false','inProgress'],
    }
  }
};

