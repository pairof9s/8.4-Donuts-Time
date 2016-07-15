var React = require('react');

var models = require('../models/recipes.js');
var RecipeCollection = require('../models/recipes.js');
var FormUpload = require('./library.jsx');
var SideBar = require('./sidebar.jsx');


var RecipeForm = React.createClass({
  getInitialState: function(){
    return {
      'recipeName': '',
      recipe: new models.Recipe()
    };
  },
  componentWillMount: function(){
    var self = this;
    if(this.props.editId){
      var recipe = this.state.recipe;
      recipe.set('objectId', this.props.editId);
      recipe.fetch().done(function(){
        self.setState({
          recipe: recipe,
          recipeName: recipe.get('recipeName')
        });
      });
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    var router = this.props.router;

    // var recipeData = jQuery(e.target).serializeObject();
    // recipe.set(recipeData);
    var recipe = this.state.recipe;
    recipe.set({'recipeName': this.state.recipeName});
    recipe.save().done(function(){
      router.navigate('recipes/', {trigger: true});
    });
  },
  handleTitleChange: function(e){
    this.setState({'recipeName': e.target.value});
  },

  render: function(){
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
        <div className="row content">
          <div className="well col-sm-offset-2 col-sm-6">
            <form onSubmit={this.handleSubmit}>
              <h3 className="form-sect-title">Recipe Maker</h3>
              <div><img src="./images/Add_photo.jpg" alt="" className="col-sm-4" /></div>
              <div className="form-group col-sm-6">
                <input type="recipeName" className="form-control" id="recipeName" placeholder="Recipe Name"></input>
              </div>
              <div className="form-group col-sm-6">
                <input type="chefName" className="form-control" id="chefName" placeholder="By Chef..."></input>
              </div>
              <div className="col-sm-6">
                <label className="checkbox-inline">
                  <input type="checkbox" id="public" value="true" /> Make It Public
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" id="private" value="false" /> Make It Private
                </label>
              </div>
              <div className="row col-xs-12 sect-space">
                <div className="form-inline">
                  <select type="recipeType" className="form-control" id="recipeType" >
                    <option>Recipe Type</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Dessert</option>
                  </select>
                  <input type="text" className="form-control" id="prepTime" placeholder="Prep Time" />
                  <input type="text" className="form-control" id="cookTime" placeholder="Cook Time" />
                  <input type="text" className="form-control" id="cookTemp" placeholder="Cook Temp" />
                </div>
              </div>
              <div className="row">
                <input value={this.state.recipeName} onChange={this.handleTitleChange} type="submit" className="btn btn-warning pull-right" value="Add Recipe"></input>
              </div>
            </form>
          </div>
        </div>
        <div className="footer-area col-xs-12">
          <a href="http://www.d9-designs.com">® 2016 D9 Designs</a>
        </div>
      </div>
    )
  }
});

// <div>
//   <FormUpload />
// </div>

module.exports = RecipeForm
