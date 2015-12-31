"use strict";

var React = require('react');

var NotFound = React.createClass({
  render: function() {
      return (
        <div id="notfound">
          This Page Doesn't Exist
        </div>
      )
    }
});

module.exports = NotFound;