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
        className={props.colorClass}
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
