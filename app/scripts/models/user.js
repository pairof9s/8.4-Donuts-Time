var Backbone = require('backbone');


var User = Backbone.Model.extend({
  idAttribute: 'objectId',

  urlRoot: function() {
    if(localStorage.getItem('parse-session-token')) {
      return "https://d9-dev-server.herokuapp.com/classes/D9users/me/";
    } else {
      return "https://d9-dev-server.herokuapp.com/classes/D9users";
    }
  }
});

var Session = Backbone.Model.extend({
  idAttribute: 'objectId',

  urlRoot: function() {
    if(localStorage.getItem('parse-session-token')) {
      return "https://d9-dev-server.herokuapp.com/classes/D9sessions/me/";
    } else {
      return "https://d9-dev-server.herokuapp.com/classes/D9users/";
    }
  },

  authenticate(options) {
    var self = this;

    if(options.username) {
      jQuery.ajax({
        url: "https://d9-dev-server.herokuapp.com/login",
        data: {
          username: options.username,
          password: options.password
        }
      }).then(function(response){
        self.set('currentUser', new User(response));

        jQuery.ajaxSetup({
          beforeSend: function(xhr){
            xhr.setRequestHeader("X-Parse-Application-Id", "d9-id99");
            xhr.setRequestHeader("X-Parse-REST-API-Key", "d9-rest99");
            xhr.setRequestHeader("X-Parse-Session-Token", response.sessionToken);
          }
        });

        localStorage.setItem('parse-session-token', response.sessionToken);
        self.trigger('authenticationSucceeded');
      });
    } else {
      // I'm authenticating with a sessionToken
      var user = new User(options);
      this.set('currentUser', user);
      this.trigger('authenticationSucceeded');
      user.fetch();
    }
  },

  restore() {
    var token = localStorage.getItem('parse-session-token');
    if(token) {
      this.authenticate({sessionToken: token});
    }
  },

  invalidate() {
    localStorage.removeItem('parse-session-token');
    this.trigger('invalidationSucceeded');
    window.location.reload();
  },

  isAuthenticated() {
    return !!this.get('currentUser');
  }
});


module.exports = {
  User: User,
  Session: Session
};











// var User = Backbone.Model.extend({
//   idAttribute: 'objectId',
//   defaults: {
//     username: '',
//     password: ''
//   },
//   urlRoot: function(){
//     if(localStorage.getItem) 'https://d9-dev-server.herokuapp.com/classes/D9users',
// },{
//   login: function(username, password){
//     var loggedInUser = new User();
//     var queryString = 'username' + username + 'password' + password;
//     loggedInUser.urlRoot = 'https://d9-dev-server.herokuapp.com/classes/D9users?' + queryString;
//     return loggedInUser.fetch();
//     }
// });
//
// module.exports = {
//   'User': User
// };
