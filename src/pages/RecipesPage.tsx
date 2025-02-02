import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store.ts";
import { setRecipes } from "../store/slices/recipeSlice.ts";

const RecipesPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const recipes = useSelector((state: RootState) => state.recipes.recipes);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => dispatch(setRecipes(data.recipes)))
            .catch((err) => console.error("Помилка завантаження рецептів", err));
    }, [dispatch]);

    return (
        <div>
            <h1>Список Рецептів</h1>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <img src={recipe.image} alt={recipe.name} width={400} />
                        <h3>{recipe.name}</h3>
                        <p>Теги: {recipe.tags.join(", ")}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipesPage;