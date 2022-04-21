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
