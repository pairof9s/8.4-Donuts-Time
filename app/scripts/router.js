var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');


var LoginForm = require('./components/login.jsx');
var RecipeList = require('./components/recipe-list.jsx');
var RecipeForm = require('./components/recipe-form.jsx');
// var recipes = require('./models/recipes');
// var cart = require('./models/cart');
// http://..../# => ''
// http://..../#login => 'login'
// http://..../#signup => 'signup'
// http://..../#dashboard => ''

var Router = Backbone.Router.extend({
  routes: {
    '': 'indexController',
    'login': 'loginController',
    'signup': 'signupController',
    'dashboard': 'dashboardController',
    'recipes/': 'recipeList',
    'recipes/add/': 'recipeAddChange',
    'recipes/:id/edit/': 'recipeAddChange',
    '/recipes/:id': 'recipeDetail',
  },
  initialize: function(){
    //JSON.parse(localStorage.getItem('user'));  -- alternate method
    // this.user = JSON.parse(localStorage.getItem('user'));
    // var user = new User();
    // user.fetch();
    // this.user = user;
  },
  indexController: function(){
    console.log('index');
  },
  loginController: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(LoginForm, {router: self}),
      document.getElementsById('container')
    )
  },
  signupController: function(){
    console.log('signup');
  },
  dashboardController: function(){
    console.log('dashboard');
  },
  recipeList: function(){
    console.log('Recipe List');
    var self = this;
    ReactDOM.render(
      React.createElement(RecipeList, {router: self}),
      document.getElementsById('container')
    )
  },
  recipeDetail: function(id){
    console.log('Recipe Detail');
  },
  recipeAddChange: function(id){
    console.log('Recipe Add/Change');
    var self = this;
    ReactDOM.render(
      React.createElement(RecipeForm, {router: self, editId: id}),
      document.getElementsById('container')
    )
  },
});

var router = new Router();


module.exports = router;
