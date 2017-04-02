import React, { Component } from 'react';
import {connect} from 'react-redux'


export class Ingredients extends Component {
  render(){
    const ingredients = this.props.ingredients.map((ing, idx) => {
      return <li key={idx}>{ing.name}</li>
    })
    return(
        <div>
          <ul>
            {ingredients}
          </ul>
        </div>
    )
  }
}


export const ConnectedIngredients = connect(mapStateToProps)(Ingredients)

function mapStateToProps(state) {
  return {ingredients: state.ingredients}
}