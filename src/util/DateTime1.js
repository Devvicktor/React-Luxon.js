//input date="2018-10-11" time="12:30 -08:00"
// output Oct 11, 2018 2:00 AM

//helper function that creates one single date parameter from passing in a date string and time string.
import { DateTime } from "luxon";
import { InjectIntl } from "react-intl";

export const createMomentWithTime = (dateString, timeString) => {
  if (!dateString && !timeString) {
    return null;
  }
  const dateMoment = DateTime.fromISO(dateString);
  const timeMoment = DateTime.fromISO(timeString).toFormat("HH:mma");
  console.log("timeMoment=>>", timeMoment);
  if (timeMoment) {
    dateMoment.c.hour = timeMoment.split(":")[0];
    dateMoment.c.minute = timeMoment.split(":")[1].split("A" || "P")[0];
  }
  return dateMoment;
};
//helper function to format date
export const formatDate = (date, time, showTime) => {
  if (!date) {
    return "";
  }
  const momentHasNoDate = DateTime.fromISO(date).isValid;

  const format = Object.assign(
    {},
    momentHasNoDate &&
      !showTime && {
        day: "numeric",
        month: "short",
        year: "numeric",
      },
    !time && {
      hour: "numeric",
      minute: "2-digit",
    }
  );

  return DateTime.fromISO(date).toLocaleString(format);
};
//Helper function that formats two dates into one interval
export const formatDateInterval = (startDate, StartTime, endDate, EndTime) => {
  if (!startDate || !endDate) {
    return "";
  }
  const start = DateTime.fromISO(startDate);
  const end = DateTime.fromISO(endDate);

  //format startTime
  const startTime = DateTime.fromISO(StartTime).toFormat("HH:mm a");
  const endTimes = DateTime.fromISO(EndTime).toFormat("HH:mm a");

  //format endTime
  const startDateTime = createMomentWithTime(startDate, StartTime);
  const endDateTime = createMomentWithTime(endDate, EndTime);

  //format startDate
  const startDateFormatted = start.toLocaleString({
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  //format endDate
  const endDateFormatted = end.toLocaleString({
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  //format startTime
  const startTimeFormatted = startDateTime.toFormat("HH:mm a");

  //format endTime
  const endTimeFormatted = endDateTime.toFormat("HH:mm a");

  //format startDateTime
  const startDateTimeFormatted = startDateTime.toLocaleString({
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  //format endDateTime
  const endDateTimeFormatted = endDateTime.toLocaleString({
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  //format endDateTime
  const endDateTimeFormatted2 = endDateTime.toFormat("MMM d, yyyy HH:mm a");
  //format startDateTime
  const startDateTimeFormatted3 = startDateTime.toFormat("MMM d, yyyy");
  //format endDateTime
  const endDateTimeFormatted3 = endDateTime.toFormat("MMM d, yyyy");
  //format startDateTime

  return {
    startDate: startDateFormatted,
    endDate: endDateFormatted,
    endTime: endTimeFormatted,
    startTime: startTimeFormatted,
    startDateTime: startDateTimeFormatted,
    endDateTime: endDateTimeFormatted,
    endDateTime2: endDateTimeFormatted2,
    startDateTime3: startDateTimeFormatted3,
    endDateTime3: endDateTimeFormatted3,
  };
};
