import React from "react"

function Recipe(props) {

    return (
        <div>
            <h1> Food Name: {props.name}</h1>
            <h3> Items: {props.items}</h3>
        </div>
    );
}

export default Recipe;