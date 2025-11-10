import { useEffect, useState } from "react";
import TopNav from "./components/TopNav";
import JournalSection from "./JournalSection";
import JournalList from "./components/JournalList";

function App() {
  const [entries, setEntries] = useState([]); // initialize empty array of journal entries

  // load any existing journal entries from localStorage
  useEffect(() => {
    const savedEntries =
      JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(savedEntries);
  }, []);

  // Save to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);

  return (
    <div className="md:h-[100dvh] flex flex-col overflow-hidden">
      <TopNav />
      <main className="w-screen flex-1 flex flex-col md:flex-row justify-center items-center p-3 overflow-hidden md:min-h-0">
        <JournalSection setEntries={setEntries} />
        <JournalList entries={entries} setEntries={setEntries} />
      </main>
    </div>
  );
}

export default App;
