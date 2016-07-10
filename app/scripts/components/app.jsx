var React = require('react');
var Cookies = require('js-cookie');

var RecipeCollection = require('../models/recipes.js').RecipeCollection;
var CartCollection = require('../models/cart.js').CartCollection;
var CartItem = require('../models/cart.js').CartItem;


var AppContainer = React.createClass({
  getInitialState: function(){
    return {
      recipeItems: []
    }
  },
  componentWillMount: function(){
  var recipeItems = new RecipeCollection();
  console.log(recipeItems);
    recipeItems.add([
      {
        'imageURL': 'http://www.prouditaliancook.com/wp-content/uploads/2014/01/cacci14top.jpg',
        'recipeName': 'Chicken Cacciatore',
        'chefName': 'Olivio DeCille',
        'public': true,
        'private': false,
        'recipeType': 'entree',
        'prepTime': 480,
        'cookTime': 3600,
        'cookTemp': 375,
        'tempF': true,
        'servings': 6,
        'servingType': '1/6 Dish',
        'step01Amount': '2',
        'step01Unit': 'lbs',
        'step01Ingrediant': 'Chicken breast, 1/4" cubed',
        'step02Amount': '1',
        'step02Unit': 'lbs',
        'step02Ingrediant': 'Rotini noodles, uncooked',
        'step03Amount': '1/2',
        'step03Unit': 'tspn',
        'step03Ingrediant': 'Salt',
        'step04Amount': '1/4',
        'step04Unit': 'tspn',
        'step04Ingrediant': 'Ground black pepper',
        'step05Amount': '1',
        'step05Unit': 'unit',
        'step05Ingrediant': 'Onion, diced medium',
        'directions': 'Preheat oven to 375°. In medium sauce pan, bring to boil 3 cups of water and then add Rotini noodles; drain once soft and place in casserole dish. In skillet, sautee diced onion with olive oil. Once carmelized, add to casserole dish. Add tomatoes, oregano, garlic, sauce and diced chicken to casserole dish. Cover and place in oven for 50-55 minutes. Remove and let sit for 5 minutes before garnishing with crumbled Parmesan and parsley, then serve!',
        'personalNotes': '',
      }
    ]);

    this.setState({
      'recipeItems': recipeItems
    });

  },
  render: function(){
    return (
      <div>
        <section className="head">
          <div className="row login-bar">
            <div className="form-group form-group-sm">
              <span className="login-entry"><input type="text" className="col-xs-2 form-control input-sm" id="username" placeholder="User name" /></span>
              <span className="login-entry"><input type="password" className="col-xs-2 form-control input-sm" id="password" placeholder="Password" /></span>
              <span className="login-entry"><button type="submit" className="col-xs-12 btn btn-warning btn-xs">Login</button></span>
            </div>
          </div>
          <div className="row title-bar">
            <div className="col-xs-offset-3 col-xs-6 title-top"></div>
            <div className="col-xs-offset-3 col-xs-6 title-name">The Baker's Book</div>
            <div className="row">
              <span className="col-xs-offset-3 col-xs-2 title-bottom"></span>
              <span className="col-xs-offset-2 col-xs-2 title-bottom"></span>
            </div>
            <span className="glyphicon glyphicon-leaf title-motif"></span>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = AppContainer;
