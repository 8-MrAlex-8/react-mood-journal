// import {ArrowRight} from "lucide-react";

const TextAreaGroup = ({ emotion }) => {
  return (
    <>
      <textarea
        className={
          "h-[42dvh] border w-[90%] border-gray-400 rounded-lg p-3 " +
          (emotion === "Happy"
            ? "bg-yellow-100"
            : emotion === "Sad"
            ? "bg-blue-100"
            : emotion === "Angry"
            ? "bg-red-100"
            : emotion === "Anxious"
            ? "bg-purple-100"
            : emotion === "Excited"
            ? "bg-green-100"
            : "bg-white")
        }
        style={{ resize: "none" }}
        placeholder={"What's on your mind?"}
      ></textarea>
      <div className="w-[90%] flex justify-end items-center">
        <button className="sub-btn bg-indigo-500 hover:bg-indigo-700 text-white p-2 md:w-1/8 rounded-md ">
          Submit
        </button>
      </div>
    </>
  );
};

export default TextAreaGroup;
