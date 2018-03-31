/**
 * Tournaments.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    platform: {
      type: 'string',
      isIn: ['PC','PS4','XB1'],
      required: true
    },
    time: {
      type: 'datetime',
      required: true
    },
    maxTeams: {
      type: 'number',
      defaultsto: 32
    },
    completed: {
      type: 'boolean',
      defaultsto: false
    }
  }
};

