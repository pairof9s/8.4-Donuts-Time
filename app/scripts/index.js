var $ = window.jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader();
    xhr.setRequestHeader();
  },
});

require('./router');

var AppContainer = require('./components/app.jsx');


ReactDOM.render(
  React.createElement(AppContainer),
  document.getElementById('container')
),

Backbone.history.start();
