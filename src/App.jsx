import TopNav from "./components/TopNav";
import JournalSection from "./JournalSection";

function App() {
  return (
    <>
      <TopNav />
      <main className="w-screen h-[90dvh] flex flex-row justify-center items-center p-3">
        <JournalSection />
        {/* Right: 20% */}
        <section className="hidden lg:block w-1/5 h-full bg-red-100"></section>
      </main>
    </>
  );
}

export default App;
