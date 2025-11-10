const JournalList = ({ entries = [], setEntries }) => {
  const handleDelete = (id) => {
    if (!window.confirm("Delete this entry?")) return;
    setEntries((prev = []) => prev.filter((e) => e.id !== id));
  };

  return (
    <section className="hidden lg:block w-1/5 border border-gray-300 rounded-lg p-4 overflow-y-auto h-full">
      <h2 className="font-bold text-lg mb-3">My Journal Entries</h2>
      {entries.length === 0 ? (
        <p className="text-gray-600 text-sm">No entries yet.</p>
      ) : (
        entries.map((entry) => (
          <div
            key={entry.id}
            className={`mb-3 rounded-md shadow cursor-pointer transition overflow-hidden ${
              entry.emotion === "Happy"
                ? "bg-yellow-50"
                : entry.emotion === "Sad"
                ? "bg-blue-50"
                : entry.emotion === "Angry"
                ? "bg-red-50"
                : entry.emotion === "Anxious"
                ? "bg-purple-50"
                : entry.emotion === "Excited"
                ? "bg-green-50"
                : "bg-white"
            }`}
          >
            <div className="flex justify-between items-start p-3">
              {/* Recorded Journal Entry Card */}
              <div>
                <h3 className="font-semibold text-sm truncate mb-1">
                  {entry.title || "Untitled"}
                </h3>
                <p className="text-xs text-gray-700 line-clamp-3 break-words overflow-hidden">
                  {entry.body}
                </p>
                <p className="text-[10px] text-gray-500 mt-1">
                  {new Date(entry.date).toLocaleString()} —{" "}
                  {entry.emotion || "—"}
                </p>
              </div>
              {/* Delete Button */}
              <div>
                <button
                  type="button"
                  onClick={() => handleDelete(entry.id)}
                  className="del-btn text-red-600 border border-red-600 hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none 
                focus:ring-red-300 font-medium rounded-full text-sm text-center inline-flex items-center"
                  aria-label="Close"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
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
