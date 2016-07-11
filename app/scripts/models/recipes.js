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
    'step01Amount': '',
    'step01Unit': '',
    'step01Ingrediant': '',
    'directions': '',
    'personalNotes': '',
  },
  displayPrep: function(){
  return (this.get('prepTime') / 60).toFixed(2);
  },
  displayCook: function(){
  return (this.get('cookTime') / 60).toFixed(2);
  }
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://tiny-parse-server.herojuapp.com/classes/D9recipes',
  parser: function(serverResponse){
    return serverResponse.results;
  }
});


module.exports = {
  'Recipe': Recipe,
  'RecipeCollection': RecipeCollection,
}
