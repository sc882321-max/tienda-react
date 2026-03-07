const Pagination = ({ total, limit, page, setPage }) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="font-mono bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded disabled:bg-indigo-400"
      >
        Anterior
      </button>

      <span className="text-xl font-bold font-mono">
        Página {page} de {totalPages}
      </span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="font-mono bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded disabled:bg-indigo-400"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;