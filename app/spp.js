var React = require('react');
var ReactDOM = require('react-dom');

// Grab the property associated with the Router
var Router = require('react-router').Router

// Grabs the Routes
var routes = require('./config/routes.js');

ReactDOM.render(

	<Router>{routes}</Router>,
	document.getElementById('app')
