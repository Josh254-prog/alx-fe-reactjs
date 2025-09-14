// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const Home = () => (
  <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
    <h1>🍲 Recipe Sharing App</h1>
    <AddRecipeForm />
    <SearchBar />
    <RecipeList />
    <FavoritesList />
    <RecommendationsList />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      <Route path="/recipes/:recipeId/edit" element={<EditRecipeForm />} />
    </Routes>
  );
}

export default App;
