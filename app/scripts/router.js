var $ = require('jquery');
var Backbone = require('backbone');
var recipes = require('./models/recipes');
var cart = require('./models/cart');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'detail/:id/': 'detail'
  },
  initialize: function(){
    this.collection = new recipes.RecipeCollection();
  },
  index: function(){

    this.collection.fetch();
  },
});

var router = new Router();


module.exports = router;
