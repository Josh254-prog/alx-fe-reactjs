// src/components/FavoritesList.jsx
import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>❤️ My Favorites</h2>
      {favRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
