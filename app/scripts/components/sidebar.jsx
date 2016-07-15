var React = require('react');

var SideBar = React.createClass({
  render: function(){
    return (
      <div className="side-bar">
        <ul>
          <li className="side-links"><a href="#">My Recipes</a></li>
          <li className="side-links"><a href="#">Public Recipes</a></li>
          <li className="side-links"><a href="#">Popular Recipes</a></li>
          <li className="side-links"><a href="#">My Favorite Recipes</a></li>
          <li className="side-links"><a href="#">My Pantry</a></li>
        </ul>
      </div>
    )
  }
});

module.exports = SideBar
