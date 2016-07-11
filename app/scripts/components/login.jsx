var React = require('react');


var LoginForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault(),

    this.props.router.user.set('username'),
    this.props.router.user.save(),
    this.props.router.navigate('dashboard', {trigger: true});
  },
  render: function(){
    return <form onSubmit={this.handleSubmit}></form>
  }
});

module.exports = LoginForm;
