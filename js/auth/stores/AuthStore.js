var Dispatcher = require('../../dispatcher');
var AuthConstants = require('../constants/AuthConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var ActionTypes = AuthConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _user = {};

var AuthStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  isLoggedIn: function() {
    return !!_user;
  },

  isAdmin: function() {
    return true;
  }
});

AuthStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {
    case ActionTypes.LOGIN:
      AuthStore.emitChange();
      break;

    case ActionTypes.LOGOUT:
      AuthStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = AuthStore;