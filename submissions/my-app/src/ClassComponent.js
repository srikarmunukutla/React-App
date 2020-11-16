import React from "react";
import Recipe from './Recipe.js';

class ClassComponent extends React.Component {

    render() {
        var recipes = []

        fetch('http://localhost:8080')
            .then(response => response.json())
            .then((data) => {
                recipes = data.foods.map(item => <Recipe name={item.name} items={item.items}/>);
            })
            .catch((err) => {
                console.log(err)
        })

        return (
            <div>
                <h1> Showing all recipes! </h1>
                {recipes}
            </div>
        )
    }
}

export default ClassComponent;