const SearchBar = ({ setSearch, setPage }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      className="font-mono w-full p-3 rounded-lg border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-6"
      onChange={handleChange}
    />
  );
};

export default SearchBar;