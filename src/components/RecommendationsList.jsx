// src/components/RecommendationsList.jsx
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>✨ Recommended for You</h2>
      <button
        onClick={generateRecommendations}
        style={{
          padding: '5px 10px',
          marginBottom: '10px',
          background: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      >
        Refresh Recommendations
      </button>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map((recipe) => (
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

export default RecommendationsList;
