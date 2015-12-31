var HomeConstants = require('../constants/HomeConstants'),
    Dispatcher = require('../../dispatcher'),
    ActionTypes = HomeConstants.ActionTypes,
    axios = require('axios'),
    config = require('../../config'),
    moment = require('moment'),
    _ = require('lodash'),
    history = require('../../common/history.js');

module.exports = {

  updateDate: function(date) {
    Dispatcher.dispatch({
      type: ActionTypes.UPDATE_DATE,
      data: date
    });
  }
};
