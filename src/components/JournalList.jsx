const JournalList = ({ entries = [], setEntries }) => {
  const handleDelete = (id) => {
    if (!window.confirm("Delete this entry?")) return;
    setEntries((prev = []) => prev.filter((e) => e.id !== id));
  };

  return (
    <section className="hidden lg:block w-1/5 h-full bg-orange-100">
      <h2 className="font-bold text-lg mb-3">My Journal Entries</h2>

      {entries.length === 0 ? (
        <p className="text-gray-600 text-sm">No entries yet.</p>
      ) : (
        entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white p-3 mb-3 rounded-md shadow cursor-pointer hover:bg-orange-50 transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-sm">
                  {entry.title || "Untitled"}
                </h3>
                <p className="text-xs text-gray-700 line-clamp-3">
                  {entry.body}
                </p>
                <p className="text-[10px] text-gray-500 mt-1">
                  {new Date(entry.date).toLocaleString()} —{" "}
                  {entry.emotion || "—"}
                </p>
              </div>
              <div className="ml-2">
                <button
                  onClick={() => handleDelete(entry.id)}
                  className="text-red-500 text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default JournalList;
