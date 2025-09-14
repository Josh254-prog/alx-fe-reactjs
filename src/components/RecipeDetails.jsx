// src/components/RecipeDetails.jsx
import { Link, useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => String(r.id) === id)
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <Link to={`/recipes/${recipe.id}/edit`}>Edit Recipe</Link>
        <DeleteRecipeButton id={recipe.id} />
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
