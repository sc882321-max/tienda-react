const SearchBar = ({ setSearch, setPage }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      className="w-full p-2 border rounded mb-6"
      onChange={handleChange}
    />
  );
};

export default SearchBar;