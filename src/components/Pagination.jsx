const Pagination = ({ total, limit, page, setPage }) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="bg-gray-800 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Anterior
      </button>

      <span className="text-xl font-bold">
        Página {page} de {totalPages}
      </span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="bg-gray-800 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;