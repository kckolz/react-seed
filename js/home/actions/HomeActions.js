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
  },

  getWeather: function() {
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=Charleston,SC&units=imperial&appid=c7169d840d9319518130687bf3dee5cf")
    .then(function(response) {
      Dispatcher.dispatch({
        type: ActionTypes.GET_WEATHER,
        data: response.data
      });
    }).catch(function(err) {

    })
  }
};
