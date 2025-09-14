// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) => state.recipes.find((r) => String(r.id) === id));
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title || '');
      setDescription(recipe.description || '');
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <p>Cannot edit a recipe that doesn't exist.</p>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe({
      id: recipe.id,
      title: title.trim(),
      description: description.trim(),
    });

    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%', minHeight: '120px' }}
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={() => navigate(-1)} style={{ marginLeft: '8px' }}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
