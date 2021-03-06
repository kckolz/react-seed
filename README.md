## React Seed App

This is a [React](https://facebook.github.io/react/) + [Flux](https://facebook.github.io/flux/) web app using [Gulp](http://gulpjs.com) builds

## Running

You must have [npm](https://www.npmjs.org/) installed on your computer.
From the root project directory run these commands from the command line:

`npm install`  
`gulp build` or `gulp start`

This will perform an initial build or start a watcher process that will
update the dist folder with any changes you make.  This watcher is
based on [Browserify](http://browserify.org/) and
[Watchify](https://github.com/substack/watchify), and it transforms
React's JSX syntax into standard JavaScript with
[Reactify](https://github.com/andreypopp/reactify).

After starting the watcher, you can open `index.html` in your browser to
open the app or you can run a simple http server with 
[httpster](https://simbco.github.io/httpster/).

If you want to use the HTML5 History API (which this app does) you will need to set up a proxy server such as [NGINX](https://www.nginx.com/). I have included an example nginx config file at the root of this project for reference.

### Contact
Kevin Kolz - kckolz@gmail.com

### License
MIT

