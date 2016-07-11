var React = require('react');
var ReactDOM = require('react-dom');

// React Bootstrap code for forms
// var FormGroup = require('react-bootstrap/lib/FormGroup');
// var FormControl = require('react-bootstrap/lib/FormControl');

var models = require('../models/recipes.js');
var RecipeCollection = require('../models/recipes.js').RecipeCollection;
var CartCollection = require('../models/cart.js').CartCollection;
var CartItem = require('../models/cart.js').CartItem;

var RecipeForm = React.createClass({
  getInitialState: function(){
    return {
      recipe: new models.Recipe();
    };
  },
  componentWillMount: function(){
    var self = this;
    if(this.props.editId){
      var recipe = this.state.recipe;
      recipe.set('objectId', this.props.editId);
      recipe.sync().done(function(){
      self.setState({recipe: recipe});
    });
  },
  handleSubmit: function(e){
    e.preventDefault();
    var recipe = new models.Recipe();
    recipe.set('id', this.props.id);

  },
  render: function(){
    return (
      <div className"row">
        <div className="col-md-12">
          <h1>Add Recipe</h1>
          <div>
            <form>
              <div className="form-group">
                <label htmlFor="recipeName">Recipe Name</label>
                <input type="recipeName" className="form-control" id="recipeName" placeholder="Recipe Name">
              </div>
              <input onClick={this.handleSubmit} type="submit" class="btn btn-warning" value="Add Recipe"></input>
            </form>
          </div>
        </div>
      </div>
    ),
  }

});


module.exports = RecipeForm;
