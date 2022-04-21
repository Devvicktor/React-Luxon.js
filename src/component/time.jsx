//react time functional component
import React from "react";
import { createMomentWithTime, formatDate } from "../util/DateTime1";

const Time = ({ date, time }) => {
  const dateTime = createMomentWithTime(date, time);
  console.log("DATETIME", dateTime);
  const formatedDate = formatDate(
    createMomentWithTime(date, time),
    null,
    false
  );
  console.log("FORMATED-DATE", formatedDate);
  return (
    <div>
      <p>Time is {formatedDate} </p>
    </div>
  );
};

export default Time;
