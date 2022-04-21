// The time description is either something that we manually set, or it's an interval of start time plus end time.
const timeDescription =
  (props.date &&
    props.date.timeDescription &&
    props.date.timeDescription.text) ||
  createFormattedTimeInterval(
    null,
    props.date && props.date.startTime,
    null,
    props.date && props.date.endTime,
    intl
  );
