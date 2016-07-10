var React = require('react');
var ReactDOM = require('react-dom');

var RecipeCollection = require('../models/recipes.js').RecipeCollection;
var CartCollection = require('../models/cart.js').CartCollection;
var CartItem = require('../models/cart.js').CartItem;

var RecipeForm = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          <div className="form-sect-title">Basic Info</div>
          <div className="form-sect-rule"></div>
        </div>
        <div>
          <div className="img-add"><img src="..." alt="..." class="img-rounded"></div>
          <input class="form-control input-lg" type="text" placeholder="Recipe Name">
          <input class="form-control input-lg" type="text" placeholder="By..">
        </div>
      </div>
    ),
  }

});


module.exports = RecipeForm;
