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
