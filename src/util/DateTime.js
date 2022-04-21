//input date="2018-10-11" time="12:30 -08:00"
// output Oct 11, 2018 2:00 AM

// //
// import { DateTime } from "luxon";

// const convertTimeZone = (date, time, timeZone) => {
//   console.log(`date: ${date} time: ${time} timeZone: ${timeZone}`);
//   console.log("TIMED", Date.now());
//   const dateTime = DateTime.fromSQL(`${date} ${time}`);
//   console.log("DATETIME", dateTime);
//   const convertedDateTime = dateTime.setZone(timeZone);
//   return convertedDateTime.toLocaleString(DateTime.DATETIME_MED);
// };

// export default convertTimeZone;
