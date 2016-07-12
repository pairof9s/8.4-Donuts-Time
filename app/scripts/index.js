var $ = window.jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
  },
});

$.fn.serializeObject = function(){
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

// $('#signup').on('submit', function(e){
//   e.preventDefault();
//   var email = $('#email').val();
//   var password = $('#password').val();
//
//   var newUser = new User();
//   newUser.set({'username': email, 'password': password});
//
//   console.log(newUser);
//
//   newUser.save();
// });
//
// $('#login').on('submit', function(e){
//   e.preventDefault();
//   var email = $('#email-login').val();
//   var password = $('#password-login').val();
//
//   var loggedInUser = User.login(email, password);
//
//   loggedInUser.done(function(response){
//     console.log(response);
//   }).failure(function(err){
//     console.log(err);
//   });
// });


var AppContainer = require('./components/app.jsx');

ReactDOM.render(
  React.createElement(AppContainer),
  document.getElementById('container')
),

require('./router');

$(function(){
Backbone.history.start();
});
