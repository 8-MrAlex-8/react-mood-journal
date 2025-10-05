import { useState } from "react";
import buttonData from "../dataShelf/buttonData.js";
import MoodButton from "./MoodButton";

const MoodBar = ({ setEmotion }) => {
  return (
    <div className="w-[90%] pt-3 flex flex-wrap items-center gap-2 overflow-x-auto">
      {buttonData.map((button) => {
        return (
          <MoodButton
            key={button.id}
            emotion={button.emotion}
            emoticon={button.emoticon}
            colorClass={button.colorClass}
            onSelect={() => {
              setEmotion(button.emotion);
            }}
          />
        );
      })}
    </div>
  );
};

export default MoodBar;
