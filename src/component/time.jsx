//react time functional component
import React from "react";
import {
  createMomentWithTime,
  formatDate,
  formatDateInterval,
} from "../util/DateTime1";

const Time = ({ date, time, startDate, endDate, startTime, endTime }) => {
  const dateTime = createMomentWithTime(date, time);
  console.log("DATETIME", dateTime);
  const formatedDate = formatDate(
    createMomentWithTime(date, time),
    time,
    false
  );
  console.log("FORMATEDDATE", formatedDate);
  const timeInterval = formatDateInterval(
    startDate,
    startTime,
    endDate,
    endTime
  );
  console.log("TIME INTERVAL", timeInterval);
  return (
    <div>
      <p>Time is {formatedDate} </p>
      <p>startDate {timeInterval.startDateTimeInterval}</p>
      <p>endDate {timeInterval.endDateTimeInterval}</p>
      <p>Start-End Date {timeInterval.dateTimeInterval}</p>
    </div>
  );
};

export default Time;
