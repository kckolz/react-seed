"use strict";

var React = require('react'),
    HomeActions = require('../actions/HomeActions.js'),
    AuthStore = require('../../auth/stores/AuthStore.js'),
    HomeStore = require('../stores/HomeStore.js'),
    classNames = require('classnames');

var Home = React.createClass({

  getInitialState: function() {
    return {
      date: HomeStore.getDate(),
      weather: HomeStore.getWeather()
    }
  },

  componentWillMount: function () {
    // When this component is loaded, fetch initial data
    HomeActions.getWeather();
  },

  componentDidMount: function() {
    HomeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    HomeStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      date: HomeStore.getDate(),
      weather: HomeStore.getWeather()
    });
  },

  renderDate: function() {
    return <div className={classNames('date')}>
            Today's date is {this.state.date.format("MMM Do YYYY")}
           </div>;
  },

  renderWeather: function() {
    if(this.state.weather) {
      return <div className={classNames('weather')}>
              The current temperature in Charleston is {this.state.weather.main.temp}&deg; Fahrenheit
             </div>;
    }
    
  },

  render: function() {
    return (
      <section id="home-page">
        {this.renderDate()}
        {this.renderWeather()}
      </section>
    )
  }
});

module.exports = Home;