import React, { Component } from 'react';
import {connect} from 'react-redux'

export class Recipes extends Component {
  render(){
    const recipes = this.props.recipes.map((recipe, i) => {
      return <li key={i}>{recipe.name}</li>
    })
    return(
        <div>
          <ul>
            {recipes}
          </ul>
        </div>
    )
  }
}


export const ConnectedRecipes = connect(mapStateToProps)(Recipes)


function mapStateToProps(state) {
  return {recipes: state.recipes}
}