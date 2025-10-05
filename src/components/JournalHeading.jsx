import LiveDateTime from "./LiveDateTime";

const JournalHeading = () => {
  return (
    <>
      {/* DT Data */}
      <div className="p-3 min-h-[10dvh] max-h-[10dvh] flex justify-start items-center gap-3 border-b-1 border-gray-200">
        <p>
          Today is: <LiveDateTime />! I'm feeling...
        </p>
      </div>
    </>
  );
};

export default JournalHeading;
