var React = require('react');

var models = require('../models/recipes.js');
var RecipeCollection = require('../models/recipes.js').RecipeCollection;


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
      <div className="well col-sm-6 detail-head img-responsive">
        <h3><span className="form-title">Add Recipe</span></h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div><img src="./images/Add_photo.jpg" alt="" className="img-rounded col-sm-3" /></div>
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
            <div className="row col-xs-12">
              <div className="form-inline col-sm-3">
                <select type="recipeType" className="form-control" id="recipeType" >
                  <option>Recipe Type</option>
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Dessert</option>
                </select>
              </div>
              <div className="form-inline col-sm-2">
                <input type="text" className="form-control" id="prepTime" placeholder="Prep Time" />
              </div>
              <div className="form-inline col-sm-2">
                <input type="text" className="form-control" id="cookTime" placeholder="Cook Time" />
              </div>
              <div className="form-inline col-sm-2">
                <input type="text" className="form-control" id="cookTemp" placeholder="Cook Temp" />
              </div>
            </div>
            <div className="row">
              <input value={this.state.recipeName} onChange={this.handleTitleChange} type="submit" className="btn btn-warning pull-right" value="Add Recipe"></input>
            </div>
          </form>
        </div>
      </div>
    )
  }
});


module.exports = RecipeForm;
