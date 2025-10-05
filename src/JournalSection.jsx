import JournalHeading from "./components/JournalHeading";
import JournalBody from "./components/JournalBody";

const JournalSection = () => {
  return (
    <section className="w-5/5 md:w-4/5 h-full m-3 px-2 border border-gray-300 rounded-lg overflow-y-auto">
      <JournalHeading />
      <JournalBody />
    </section>
  );
};

export default JournalSection;
