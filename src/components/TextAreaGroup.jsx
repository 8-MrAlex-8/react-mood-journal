// import {ArrowRight} from "lucide-react";
import journalPrompt from "../dataShelf/journalPrompts";

const TextAreaGroup = ({ emotion, setEntries }) => {
  function handleSubmit(event) {
    event.preventDefault(); // prevent page refresh
    const formData = new FormData(event.currentTarget); // get all form data
    // Extract individual fields
    const getJournalTitle = formData.get("journal-title")?.trim() || "";
    const getJournalBody = formData.get("journal-body")?.trim() || "";

    // Validate that both title and body are not empty
    if (!getJournalTitle && !getJournalBody) {
      alert(
        "Please select an emotion, then enter a title and journal entry before submitting."
      );
      return;
    }
    if (!getJournalTitle) {
      alert("Please enter a title for your journal entry.");
      return;
    }
    if (!getJournalBody) {
      alert("Please write something in your journal entry.");
      return;
    }

    const getJournalEntryId = crypto.randomUUID(); // create journalEntryID upon submission
    // Create JSON object
    const journalEntry = {
      id: getJournalEntryId,
      title: getJournalTitle,
      body: getJournalBody,
      emotion: emotion, // optional: save the selected emotion too
      date: new Date().toISOString(), // optional: auto-add timestamp
    };
    // Add the new entry to the beginning of the list
    setEntries((prev = []) => {
      const updated = [journalEntry, ...prev];
      localStorage.setItem("journalEntries", JSON.stringify(updated));
      return updated;
    });

    // Reset the form (since inputs are uncontrolled here)
    event.currentTarget.reset();
  }

  return (
    <form
      className="flex flex-col items-center gap-3 m-0 p-0 w-full"
      onSubmit={handleSubmit}
    >
      <input
        className={`h-[8dvh] border w-[90%] border-gray-400 rounded-lg p-3 
      ${
        emotion === "Happy"
          ? "bg-gradient-to-r from-slate-50 to-yellow-100 cursor-text"
          : emotion === "Sad"
          ? "bg-gradient-to-r from-slate-50 to-blue-100 cursor-text"
          : emotion === "Angry"
          ? "bg-gradient-to-r from-slate-50 to-red-100 cursor-text"
          : emotion === "Anxious"
          ? "bg-gradient-to-r from-slate-50 to-purple-100 cursor-text"
          : emotion === "Excited"
          ? "bg-gradient-to-r from-slate-50 to-green-100 cursor-text"
          : "bg-white cursor-not-allowed opacity-50"
      }`}
        disabled={!emotion}
        placeholder="Title"
        id="journal-title"
        name="journal-title"
        required
      ></input>
      <textarea
        className={`h-[34dvh] border w-[90%] border-gray-400 rounded-lg p-3 
          ${
            emotion === "Happy"
              ? "bg-gradient-to-r from-slate-50 to-yellow-100 cursor-text"
              : emotion === "Sad"
              ? "bg-gradient-to-r from-slate-50 to-blue-100 cursor-text"
              : emotion === "Angry"
              ? "bg-gradient-to-r from-slate-50 to-red-100 cursor-text"
              : emotion === "Anxious"
              ? "bg-gradient-to-r from-slate-50 to-purple-100 cursor-text"
              : emotion === "Excited"
              ? "bg-gradient-to-r from-slate-50 to-green-100 cursor-text"
              : "bg-white cursor-not-allowed opacity-50"
          }
        `}
        style={{ resize: "none" }}
        placeholder={journalPrompt}
        id="journal-body"
        name="journal-body"
        disabled={!emotion}
        required
      ></textarea>
      <div className="w-[90%] flex justify-end items-center">
        <button
          type="submit"
          className={`sub-btn bg-sky-600 text-white p-2 md:w-1/8 rounded-md transition ${
            !emotion
              ? "cursor-not-allowed opacity-50 bg-sky-400"
              : "hover:bg-sky-800 cursor-pointer"
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TextAreaGroup;
