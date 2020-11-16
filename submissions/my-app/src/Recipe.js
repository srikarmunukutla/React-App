import React from "react"

function Recipe(props) {

    return (
        <div>
            <h3> Food Name: {props.name}</h3>
            <h4> Items: {props.items}</h4>
        </div>
    );
}

export default Recipe;