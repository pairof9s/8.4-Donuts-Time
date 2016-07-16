var React = require('react');
var Cookies = require('js-cookie');

var RecipeCollection = require('../models/recipes.js').RecipeCollection;
var RecipeForm = require('./recipe-form.jsx');
var LoginForm = require('./login.jsx').LoginForm;
var SignUpForm = require('./login.jsx').SignUpForm;


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
        'amount': '2',
        'unit': 'lbs',
        'ingrediant': 'Chicken breast, 1/4" cubed',
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
          <div className="row">
            <div className="col-xs-offset-10 col-xs-2">
              <a href="#recipes/add/"><div className="glyphicon glyphicon-plus uni-nav" alt="Add Recipe"></div></a>
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
        </section>
        <section>
          <div>
            <LoginForm />
          </div>
          <div className="col-md-3 copy-box">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <SignUpForm />
          </div>
          <div className="col-md-3 copy-box">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </section>
        <div className="footer-area col-xs-12">
          <a href="http://www.d9-designs.com">® 2016 D9 Designs</a>
        </div>
      </div>
    );
  }
});

module.exports = AppContainer;


// Previous component load for Recipe Form HTML for testing.
// <section>
//   <div className="row">
//     <div className="well col-md-6 recipe-change">{RecipeForm}</div>
//   </div>
// </section>
