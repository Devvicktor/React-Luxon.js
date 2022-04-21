import * as moment from "moment";
import { InjectedIntl } from "react-intl";

// Helper function that creates one single date parameter from passing in a date string and time string.
export const createMomentWithTime = (
  dateString: string,
  timeString: string
): moment.Moment => {
  if (!dateString && !timeString) {
    return null;
  }

  const dateMoment: moment.Moment = moment(dateString || 0);
  const timeMoment: moment.Moment = moment(timeString?.replace(/\s/g, ""), [
    "h a",
    "hmm a",
    "hmm a Z",
    "HH:mm",
    "HH:mm Z",
    "HH:mm:ss",
    "HH:mm:ss Z",
  ]);

  if (timeMoment) {
    dateMoment.hour(timeMoment.hour());
    dateMoment.minutes(timeMoment.minutes());
    dateMoment.seconds(timeMoment.seconds());
  }

  return dateMoment;
};

// Helper function that formats a date.
//
// We (sadly) need a timeString parameter for this function, so that we can determine whether a time set to midnight
// actually means that it is deliberately set to midnight, or whether it's just the default of 0.
// If it's not set, we don't want to show it.
//
// For formatting options, see https://github.com/yahoo/react-intl/wiki/API#date-formatting-apis
export const formatDate = (
  date: moment.Moment,
  timeString: string,
  onlyShowTime: boolean,
  intl: InjectedIntl
): string => {
  if (!date) {
    return null;
  }

  const momentHasNoDate = date.isSame(moment(0), "day");
  const format: Intl.DateTimeFormatOptions = Object.assign<
    {},
    Intl.DateTimeFormatOptions,
    Intl.DateTimeFormatOptions
  >(
    {},
    !momentHasNoDate &&
      !onlyShowTime && {
        day: "numeric",
        month: "short",
        year: "numeric",
      },
    !!timeString && {
      hour: "numeric",
      minute: "numeric",
    }
  );

  return intl.formatDate(date.toDate(), format);
};

// Helper function that formats two dates into one interval.
export const createFormattedTimeInterval = (
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string,
  intl: InjectedIntl
): string => {
  // Show text when it was entered into the date start field.
  if (startDate && !Date.parse(startDate)) {
    return startDate;
  }

  // Create the two moments.
  // Note that, for the end date, we use any given date: start or end.
  // That makes it easier to reason about it afterwards.
  const start = createMomentWithTime(startDate, startTime);
  const end = createMomentWithTime(endDate || startDate, endTime || startTime);

  if (end && start) {
    if (start.isSame(end, "minutes")) {
      // If both dates are exactly the same, format DATE1 TIME1
      return formatDate(start, startTime, false, intl);
    } else if (start.isSame(end, "day")) {
      // If both dates are the same day, format DATE1 TIME1 - TIME2
      return [
        formatDate(start, startTime, false, intl),
        formatDate(end, endTime, true, intl),
      ]
        .filter(Boolean)
        .join(" - ");
    }

    // If both dates are on different days, format DATE1 TIME1 - DATE2 TIME2
    return [
      formatDate(start, startTime, false, intl),
      formatDate(end, endTime, false, intl),
    ]
      .filter(Boolean)
      .join(" - ");
  }

  // If there is only one date, format DATE2 TIME2. Date2 takes from either input, so that one will be the most valid.
  return formatDate(end, endTime, false, intl);
};
