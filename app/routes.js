var React = require('react');
var Router = require('react-router');
var Main = require('./Components/Main.js');
var Search = require('./Components/Search.js')
var Saved = require('./Components/Saved.js')

var Route = Router.Route;

//  IndexRoute is a special React route that acts as the "catch-all" 
var IndexRoute	= Router.IndexRoute

module.exports = (
		<Route path="/" component={Main}>
		{/* If user selects the profile path... we get the Profile component*/}
		{/*<Route path='profile/:username' component={Profile} />*/}

		{/*If user selects any other path... we get the Home Route*/}
		{/*<IndexRoute component={Home} />*/}
		<IndexRoute component={Search} />
		<Route path='/saved' component={Saved} />
	</Route>

);