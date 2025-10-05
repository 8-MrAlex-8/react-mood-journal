import "../index.css";
import { useState } from "react";

const MoodButton = (props) => {
  const [text, setText] = useState(props.emotion);

  const handleHoverOn = () => setText(props.emoticon);
  const handleHoverOff = () => setText(props.emotion);

  return (
    <>
      <button
        type="button"
        className={
          props.isSelected
            ? `${props.colorClass} ${
                props.emotion === "Happy"
                  ? "bg-amber-500 shadow-[0px_15px_20px_rgba(252,211,77,0.6)] selected"
                  : props.emotion === "Sad"
                  ? "bg-blue-800 shadow-[0px_15px_20px_rgba(96,165,250,0.65)] selected"
                  : props.emotion === "Angry"
                  ? "bg-red-600 shadow-[0px_15px_20px_rgba(239,68,68,0.4)] selected"
                  : props.emotion === "Anxious"
                  ? "bg-purple-700 shadow-[0px_15px_20px_rgba(124,58,237,0.4)] selected"
                  : props.emotion === "Excited"
                  ? "bg-green-700 shadow-[0px_15px_20px_rgba(52,211,153,0.6)] selected"
                  : ""
              } text-white -translate-y-2`
            : props.colorClass
        }
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        onClick={() => {
          handleHoverOn();
          props.onSelect();
        }}
      >
        {props.isSelected ? props.emoticon : text}
      </button>
    </>
  );
};

export default MoodButton;
