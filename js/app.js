var React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./App.jsx'),
    Home = require('./home/components/Home.jsx'),
    NotFound = require('./common/NotFound.jsx'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    history = require('./common/history.js');

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="*" component={NotFound} />
    </Route>
  </Router>, document.getElementById('main-content'));