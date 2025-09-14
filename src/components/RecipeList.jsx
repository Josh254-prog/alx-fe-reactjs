// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => {
          const isFav = favorites.includes(recipe.id);
          return (
            <div
              key={recipe.id}
              style={{
                border: '1px solid #ddd',
                margin: '10px 0',
                padding: '10px',
              }}
            >
              <h3>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>
                {recipe.description?.slice(0, 120)}
                {recipe.description && recipe.description.length > 120
                  ? '…'
                  : ''}
              </p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                <Link to={`/recipes/${recipe.id}`}>View</Link>
                <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
                <DeleteRecipeButton id={recipe.id} />
                <button
                  onClick={() =>
                    isFav
                      ? removeFavorite(recipe.id)
                      : addFavorite(recipe.id)
                  }
                  style={{
                    padding: '5px 10px',
                    background: isFav ? 'gold' : '#eee',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                  }}
                >
                  {isFav ? '★ Unfavorite' : '☆ Favorite'}
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecipeList;
