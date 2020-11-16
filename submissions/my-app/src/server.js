const express = require('express');
const app = express();
const port = 8080;

const recipes = [
    { "foods" : [
        { name: "Pizza", items: "Cheese, Flour, Sauce"},
        { name: "Cheeseburger", items: "Cheese, Buns, Lettuce, Tomatoes"},
        { name: "Cake", items: "Batter, Eggs, Butter, Milk"},
        { name: "Pasta", items: "Noodles, Sauce"},
        { name: "Paneer", items: "Cheese"},
        { name: "Tortilla", items: "Corn"},
        { name: "Chicken Noodle Soup", items: "Chicken, Noodles, Soup"},
        { name: "Burrito", items: "Flour, Beans, Cheese"},
        { name: "Salad", items: "Lettuce, Tomatoes, Peppers, Olives, Cucumbers"},
        { name: "Apple Pie", items: "Apples, Flour, Eggs"},
    ]}
]

app.get('/api/recipes', (req, res) => {
    res.send(recipes[0]);
})

app.listen(port, () => console.log(`Listening on port ${port}`))