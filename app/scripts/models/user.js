var Backbone = require('backbone');


var User = Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: {
    username: '',
    password: ''
  },
  urlRoot: 'https://d9-dev-server.herokuapp.com/classes/D9users',
},
  {login: function(username, password){
    var loggedInUser = new User();
    var queryString = 'username' + username + 'password' + password;
    loggedInUser.urlRoot = 'https://d9-dev-server.herokuapp.com/classes/D9users?' + queryString;
    return loggedInUser.fetch();
    }
  });

module.exports = {
  'User': User
};
