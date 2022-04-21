import { useState } from "react";
import { TimeZoneContext, localTimeZone } from "./Timezone";

const TimeZoneProvider = ({ children }) => {
  const [timeZone, setTimeZone] = useState(localTimeZone);
  return (
    <TimeZoneContext.Provider value={{ timeZone, setTimeZone }}>
      {children}
    </TimeZoneContext.Provider>
  );
};
export default TimeZoneProvider;
