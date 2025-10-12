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
    <>
      <TopNav />
      <main className="w-screen h-[90dvh] flex flex-row justify-center items-center p-3">
        <JournalSection setEntries={setEntries} />
        <JournalList entries={entries} setEntries={setEntries} />
      </main>
    </>
  );
}

export default App;
