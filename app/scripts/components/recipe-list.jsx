var React = require('react');

var models = require('../models/recipes');


var RecipeList = React.createClass({
  getInitialState: function(){
    return {
      recipeCollection: []
    };
  },
  componentWillMount: function(){
    var self = this;
    var recipeCollection = new models.recipeCollection();
    recipeCollection.fetch().done(function(){
      self.setState({recipeCollection: recipeCollection})
    });
  },
  render: function(){
    var recipes = this.state.recipeCollection;
    console.log(recipes);
    var recipeList = recipes.map(function(recipe){
      return (
        <li key={recipe.get('objectId')}>
          {recipe.get('recipeName')}
          <a href={"#recipes/" + recipe.get('objectId') + "/edit/"}>Edit</a>
        </li>
      );
    });

    return (
       <div className="row">
         <div className="col-md-12">
           <h1>
             Recipes!<a href="#recipes/add/" className="btn btn-primary pull-right">Add</a>
           </h1>
           <ul>
             {recipeList}
           </ul>
         </div>
       </div>
     )
   }
 });

module.exports = RecipeList;
