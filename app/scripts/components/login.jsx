var React = require('react');
var ReactDOM = require('react-dom');


var LoginForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault(),

    this.props.router.user.set('username'),
    this.props.router.user.save(),
    this.props.router.navigate('dashboard', {trigger: true});
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="login-entry">
          <label htmlFor="username">User Name</label>
          <input type="username" className="form-control" id="username" placeholder="Enter Username"></input>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password"></input>
          <input onClick={this.handleSubmit} type="submit" class="btn btn-warning" value="dashboard"></input>
        </form>
      </div>
    )
  }
});

module.exports = LoginForm;
