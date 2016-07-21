var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var models = require('../models/recipes');
var User = require('../models/user').User;


var LoginForm = React.createClass({
  getInitialState: function(){
    return {
      'username': '',
      'password': ''
    };
  },
  componentWillMount: function(){
    var self = this;
    // var user = this.state.user;
    // user.set('objectId');
    // user.fetch().done(function(){
    //   self.setState({user: user})
    // });
  },
  handleLoginSubmit: function(e){
    e.preventDefault();
    var self = this;

    self.props.router.user.set('username');
    self.props.router.user.save();
    self.props.router.navigate('recipes/', {trigger: true});
  },
  handlePasswordChange: function(e){
    this.setState({password: e.target.value})
  },
  handleUsernameChange: function(e){
    this.setState({username: e.target.value})
  },
  },
  render: function(){
    return (
      <div className="col-md-2 log-form">
        <div className="log-sect">
          <h4><span className="glyphicon glyphicon-log-in log-icon"></span>Log In...</h4>
        </div>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="username">User Name</label>
          <input onChange={this.handleUsernameChange} type="username" className="form-control log-entry" id="username" placeholder="Enter Username"></input>
          <label htmlFor="password">Password</label>
          <input onChange={this.handlePasswordChange} type="password" className="form-control log-entry" id="password" placeholder="Enter Password"></input>
          <input type="submit" className="btn btn-warning btn-sm pull-right" value="Login"></input>
        </form>
      </div>
    )
  }
});

var SignUpForm = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: '',
    };
  },
  componentWillMount: function(){
    var self = this;

  },
  handleSignSubmit: function(e){
    e.preventDefault();
    var self = this;
    var username = $('username').val();
    var password = $('password').val();

    var user = new User();
    user.set({'username': username, 'password': password});

    user.save().done(function(){
    self.props.router.navigate('', {trigger: true})
    });
  },
  render: function(){
    return (
      <div>
        <div className="divider"></div>
        <div className="col-md-2 log-form">
          <div className="log-sect">
            <h4><span className="glyphicon glyphicon-edit log-icon"></span>Sign Up...</h4>
          </div>
          <form onSubmit={this.handleSignSubmit}>
            <label htmlFor="username">User Name</label>
            <input type="username" className="form-control log-entry" id="username" placeholder="Create Username..."></input>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control log-entry" id="password" placeholder="Create Password..."></input>
            <input type="submit" className="btn btn-warning btn-sm pull-right" value="Create User"></input>
          </form>
        </div>
      </div>
    )
  }
});


module.exports = {
  'LoginForm': LoginForm,
  'SignUpForm': SignUpForm
};


/* For the Login form if Password field is used */
// <label htmlFor="password">Password</label>
// <input type="password" className="form-control log-entry" id="password" placeholder="Enter password"></input>
