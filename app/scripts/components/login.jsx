var React = require('react');

var models = require('../models/user');


var LoginForm = React.createClass({
  getInitialState: function(){
    return {
      'username': '',
      'password': '',
      user: new models.User()
    };
  },
  componentWillMount: function(){
    var self = this;
    var user = new models.User();
    user.fetch().done(function(){
      self.setState({user: user})
    });
  },
  handleSubmit: function(e){
    e.preventDefault(),

    this.props.router.user.set('username'),
    this.props.router.user.save(),
    this.props.router.navigate('recipes', {trigger: true});
  },
  render: function(){
    return (
      <div className="well col-md-2 log-form">
        <div className="log-sect">
          <h4><span className="glyphicon glyphicon-log-in log-icon"></span>Log In...</h4>
        </div>
        <form onSubmit={this.handleSubmit} className="login-entry">
          <label htmlFor="username">User Name</label>
          <input type="username" className="form-control" id="username" placeholder="Enter Username"></input>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password"></input>
          <input onClick={this.handleSubmit} type="submit" className="btn btn-warning pull-right" value="Login"></input>
        </form>
      </div>
    )
  }
});

var SignUpForm = React.createClass({
  getInitialState: function(){
    return {
      'username': '',
      'password': ''
    };
  },
  componentWillMount: function(){
    var self = this;

  },
  handleSubmit: function(e){
    e.preventDefault(),
    this.props.router.user.set('username'),
    this.props.router.user.save(),
    this.props.router.navigate('login', {trigger: true});
  },
  render: function(){
    return (
      <div>
        <div className="divider"></div>
        <div className="well col-md-2 log-form">
          <div className="log-sect">
            <h4><span className="glyphicon glyphicon-edit log-icon"></span>Sign Up...</h4>
          </div>
          <form onSubmit={this.handleSubmit} className="login-entry">
            <label htmlFor="username">User Name</label>
            <input type="username" className="form-control" id="username" placeholder="Create Username..."></input>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Create Password..."></input>
            <input onClick={this.handleSubmit} type="submit" className="btn btn-warning pull-right" value="Create User"></input>
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
