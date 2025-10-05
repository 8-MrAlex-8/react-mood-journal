import { useState, useEffect } from "react";

const LiveDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-md italic text-black p-0 m-0">
      {dateTime.toLocaleDateString(undefined, {
        weekday: "long", // Full day name, e.g. "Saturday"
        year: "numeric",
        month: "long", // Full month name, e.g. "October"
        day: "numeric",
      })}
    </span>
  );
};

export default LiveDateTime;
