var Dispatcher = require('../../dispatcher');
var HomeConstants = require('../constants/HomeConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var moment = require('moment');
var ActionTypes = HomeConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _date = moment(),
    _weather = null;

var HomeStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getDate: function() {
    return _date;
  },

  getWeather: function() {
    return _weather;
  }
});

HomeStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.UPDATE_DATE:
      _date = action.data
      HomeStore.emitChange();
      break;

    case ActionTypes.GET_WEATHER:
      _weather = action.data
      HomeStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = HomeStore;