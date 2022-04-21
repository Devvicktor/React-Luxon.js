// //helper function to format date

// import { injectIntl } from "react-intl";

// export const formatDate = (date, time, showTime, intl) => {
//   if (!date) {
//     return "";
//   }

//   const dateMoment = DateTime.fromISO(date, { setZone: true });
//   const timeMoment = DateTime.fromISO(time, { setZone: true });

//   if (timeMoment) {
//     dateMoment.set({
//       hour: timeMoment.hour,
//       minute: timeMoment.minute,
//       second: timeMoment.second,
//     });
//   }

//   if (showTime) {
//     return dateMoment.toLocaleString(DateTime.DATETIME_MED, {
//       locale: intl.locale,
//     });
//   } else {
//     return dateMoment.toLocaleString(DateTime.DATE_MED, {
//       locale: intl.locale,
//     });
//   }
// }
