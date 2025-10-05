import { useState } from "react";
import MoodBar from "./MoodBar";
import TextAreaGroup from "./TextAreaGroup";

const JournalBody = () => {
  const [emotion, setEmotion] = useState(null);

  return (
    <>
      <div
        className={
          "md:min-h-[70dvh] md:max-h-[80dvh] flex flex-col justify-center items-center gap-3 p-4 transition-all " +
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
      >
        <MoodBar setEmotion={setEmotion} />
        {/* Where the state will change */}

        <TextAreaGroup emotion={emotion} />
        {/* Only needs to read the state value */}
      </div>
    </>
  );
};

export default JournalBody;
