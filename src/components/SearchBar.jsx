// src/components/SearchBar.jsx
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="🔍 Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        display: 'block',
        margin: '10px 0 20px',
        padding: '8px',
        width: '100%',
        border: '1px solid #ddd',
        borderRadius: '5px',
      }}
    />
  );
};

export default SearchBar;
