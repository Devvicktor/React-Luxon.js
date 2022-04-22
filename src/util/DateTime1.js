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
  const timeMoment = DateTime.fromISO(timeString).toFormat("h:mm a");

  if (timeMoment) {
    dateMoment.c.hour = parseInt(timeMoment.split(":")[0]);
    dateMoment.c.minute = parseInt(
      timeMoment.split(":")[1].split("A" || "P" || " ")[0]
    );
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
    time && {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
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
  //format s"14:30 -8:00" to "2:30 PM -8:00"

  //format endTime
  const startDateTime = createMomentWithTime(startDate, StartTime);
  const endDateTime = createMomentWithTime(endDate, EndTime);
  //format startTime

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
  const startTimeFormatted = DateTime.fromISO(StartTime).toFormat("h:mm a");
  startDateTime.toFormat("h:mm a");

  //format endTime
  const endTimeFormatted = DateTime.fromISO(EndTime).toFormat("h:mm a");

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
  const endDateTimeFormatted2 = endDateTime.toFormat("MMM d, yyyy h:mm a");
  //format startDateTime
  const startDateTimeFormatted3 = startDateTime.toFormat("MMM d, yyyy");
  //format endDateTime
  const endDateTimeFormatted3 = endDateTime.toFormat("MMM d, yyyy");
  //merge startDateTimeFormatted3 and startTimeFormatted
  const startDateTimeFormatted4 =
    startDateTimeFormatted3 + " " + startTimeFormatted;
  //merge endDateTimeFormatted3 and endTimeFormatted
  const endDateTimeFormatted4 = endDateTimeFormatted3 + " " + endTimeFormatted;
  //merge startDateTimeFormatted4 and endDateTimeFormatted4
  const startDateTimeFormatted5 =
    startDateTimeFormatted4 + " - " + endDateTimeFormatted4;

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
    startDateTimeInterval: startDateTimeFormatted4,
    endDateTimeInterval: endDateTimeFormatted4,
    dateTimeInterval: startDateTimeFormatted5,
  };
};
