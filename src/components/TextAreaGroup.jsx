// import {ArrowRight} from "lucide-react";
import journalPrompt from "../dataShelf/journalPrompts";

const TextAreaGroup = ({ emotion }) => {
  function handleSubmit(event) {
    event.preventDefault(); // prevent page refresh
    const textAreaData = new FormData(event.currentTarget); // get form data
    console.log(textAreaData);
  }

  return (
    <form
      className="flex flex-col items-center gap-3 m-0 p-0 w-full"
      onSubmit={handleSubmit}
    >
      <textarea
        className={
          "h-[42dvh] border w-[90%] border-gray-400 rounded-lg p-3 " +
          (emotion === "Happy"
            ? "bg-gradient-to-r from-slate-50 to-yellow-100"
            : emotion === "Sad"
            ? "bg-gradient-to-r from-slate-50 to-blue-100"
            : emotion === "Angry"
            ? "bg-gradient-to-r from-slate-50 to-red-100"
            : emotion === "Anxious"
            ? "bg-gradient-to-r from-slate-50 to-purple-100"
            : emotion === "Excited"
            ? "bg-gradient-to-r from-slate-50 to-green-100"
            : "bg-white")
        }
        style={{ resize: "none" }}
        placeholder={journalPrompt}
        id="journal-body"
        name="journal-body"
        disabled
      ></textarea>
      <div className="w-[90%] flex justify-end items-center">
        <button
          type="submit"
          className="sub-btn bg-sky-600 hover:bg-sky-800 text-white p-2 md:w-1/8 rounded-md "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TextAreaGroup;
