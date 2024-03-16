import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({handleAddToCook}) => {
    const [recipes, setRecipes] = useState([]);

    // const [ingredient, setIngredient] = useState([]);

    useEffect(() => {
        fetch('./recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, []);

    


    return (
            <div className="w-2/3 grid grid-cols-2 gap-5 lexend">
                {/* <h1 className="text-4xl">Recipes: {recipes.length}</h1> */}
                {
                    recipes.map(recipe => <Card 
                        key={recipe.id} 
                        card={recipe}
                        handleAddToCook={handleAddToCook}
                    ></Card>)
                }
            </div>
    );
};

export default Cards;