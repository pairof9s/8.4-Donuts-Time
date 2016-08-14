var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var Recipe = require('./models/recipes').Recipe;
var AppContainer = require('./components/app.jsx');
var LoginForm = require('./components/login.jsx').LoginForm;
var SignUpForm = require('./components/login.jsx').SignUpForm;
var RecipeList = require('./components/recipe-list.jsx');
var RecipeForm = require('./components/recipe-form.jsx');
var RecipeDetail = require('./components/recipe-detail.jsx');


var Router = Backbone.Router.extend({
  routes: {
    '': 'indexController',
    'index': 'indexController',
    'login/': 'loginController',
    'signup/': 'signupController',
    'recipes/': 'recipeList',
    'recipes/add/': 'recipeAddChange',
    'recipes/:id/edit/': 'recipeAddChange',
    '/recipes/:id': 'recipeDetail'
  },
  initialize: function(){
    //JSON.parse(localStorage.getItem('user'));  -- alternate method
    // this.user = JSON.parse(localStorage.getItem('user'));
    // var user = new User();
    // user.fetch();
    // this.user = user;
  },
  indexController: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(AppContainer, {router: self}),
      document.getElementById('container')
    )
    // $('#container').addClass('wrapper-login');
    // $('#container').removeClass('wrapper-main');
  },
  loginController: function(){
    console.log('login');
    var self = this;
    ReactDOM.render(
      React.createElement(LoginForm, {router: self}),
      document.getElementById('container')
    )
  },
  signupController: function(){
    console.log('signup');
    var self = this;
    ReactDOM.render(
      React.createElement(SignUpForm, {router: self}),
      document.getElementById('container')
    )
  },
  recipeList: function(){
    console.log('recipes');
    var self = this;
    ReactDOM.render(
      React.createElement(RecipeList, {router: self}),
      document.getElementById('container')
    )
  },
  recipeDetail: function(id){
    console.log('Recipe Detail');
  },
  recipeAddChange: function(id){
    console.log('recipes/add');
    var self = this;
    ReactDOM.render(
      React.createElement(RecipeForm, {router: self, editId: id}),
      document.getElementById('container')
    )
  },
});

var router = new Router();


module.exports = router;
