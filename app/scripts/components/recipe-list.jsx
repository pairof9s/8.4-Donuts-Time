var React = require('react');

var models = require('../models/recipes');
var SideBar = require('./sidebar.jsx');


var RecipeList = React.createClass({
  getInitialState: function(){
    return {
      recipeCollection: []
    };
  },
  componentWillMount: function(){
    var self = this;
    var recipeCollection = new models.RecipeCollection();
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
       <div>
         <div className="head-sec">
           <div className="row">
             <div className="col-xs-offset-10 col-xs-2">
               <div className="glyphicon glyphicon-plus uni-nav" alt="Add Recipe"><a href="#recipes/add/"></a></div>
               <div className="glyphicon glyphicon-user uni-nav" alt="Login"><a href="#login/"></a></div>
               <div className="glyphicon glyphicon-cog uni-nav" alt="Change Settings"><a href="#recipes/"></a></div>
             </div>
           </div>
           <div className="row">
             <div className="col-xs-offset-3 col-xs-6 title-name">The Baker's Book</div>
           </div>
           <div className="row">
             <span className="col-xs-offset-3 col-xs-2 title-bottom"></span>
             <span className="col-xs-offset-2 col-xs-2 title-bottom"></span>
           </div>
             <span className="glyphicon glyphicon-leaf title-motif"></span>
         </div>
         <div><SideBar /></div>
         <div className="well col-md-offset-3 col-md-6">
           <h1 className="form-title">Recipes</h1>
           <a href="#recipes/add/" className="btn btn-warning btn-sm pull-right">Add</a>
           <ul>
             {recipeList}
           </ul>
         </div>
         <div className="footer-area col-xs-12">
           <a href="http://www.d9-designs.com">® 2016 D9 Designs</a>
         </div>
       </div>
     )
   }
 });

module.exports = RecipeList;
