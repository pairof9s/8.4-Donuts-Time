var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  defaults: {
    'imageURL': '',
    'recipeName': '',
    'chefName': '',
    'public': true,
    'private': false,
    'recipeType': '',
    'prepTime': 0,
    'cookTime': 0,
    'cookTemp': 0,
    'tempF': true,
    'servings': 0,
    'servingType': '',
    'amount': '',
    'unit': '',
    'ingrediant': '',
    'directions': '',
    'personalNotes': ''
  },
  idAttribute: 'objectId',
  urlRoot: 'https://d9-dev-server.herokuapp.com/classes/D9recipes/',
  url: function(){
    return this.urlRoot + this.get('objectId') + '/';
  }

  // displayPrep: function(){
  // return (this.get('prepTime') / 60).toFixed(2);
  // },
  // displayCook: function(){
  // return (this.get('cookTime') / 60).toFixed(2);
  // }
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://d9-dev-server.herokuapp.com/classes/D9recipes/',
  parser: function(serverResponse){
    return serverResponse.results;
  }
});


module.exports = {
  'Recipe': Recipe,
  'RecipeCollection': RecipeCollection
}
