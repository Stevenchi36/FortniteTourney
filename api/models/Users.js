/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    username: {
      type: 'string',
      unique: true,
      size: 20
    },
    email: {
      type: 'string',
      unique: true
    },
    password: {
      type: 'string'
    },
    pc: {
      type: 'string',
      unique: true
    },
    ps4: {
      type: 'string',
      unique: true
    },
    xb1: {
      type: 'string',
      unique: true
    },
    points: {
      type: 'integer'
    }

  }
};

