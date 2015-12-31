"use strict";

var React = require('react'),
    Router = require('react-router'),
    classNames = require('classnames'),
    RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
      return (
        <div id="page-wrapper">
          <main id="page-container" className={classNames('page-container')}>
            {this.props.children}
          </main>
        </div>
      )
    }
});

module.exports = App;