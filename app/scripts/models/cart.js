var Backbone = require('backbone');

var Recipe = require('./recipes.js').Recipe;

var CartItem = Recipe.extend({
});

var CartCollection = Backbone.Collection.extend({
  model: 'CartItem',

});

module.exports = {
  'CartItem': CartItem,
  'CartCollection': CartCollection
}
