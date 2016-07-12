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
      <div className="row">
        <div className="col-md-4">
          <h3>Add Recipe</h3>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="recipeName">Recipe Name</label>
                <input type="recipeName" className="form-control" id="recipeName" placeholder="Enter recipe name..."></input>
              </div>
              <input value={this.state.recipeName} onChange={this.handleTitleChange} type="submit" className="btn btn-warning" value="Add Recipe"></input>
            </form>
          </div>
        </div>
      </div>
    )
  }
});


module.exports = RecipeForm;
