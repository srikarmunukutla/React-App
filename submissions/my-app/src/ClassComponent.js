import React from "react";
import Recipe from './Recipe.js';

class ClassComponent extends React.Component {

    render() {
        let mappedRecipes = []
        fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(data => {
            mappedRecipes = data.foods.map(item => <Recipe name={item.name} items={item.items}/>);
        })
        return (
            <div>
                <h1> Showing all recipes! </h1>
                {mappedRecipes}
            </div>
        )
    }
}

export default ClassComponent;