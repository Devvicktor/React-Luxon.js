import React from "react";
import { DateTime } from "luxon";

export const localTimeZone = DateTime.local().zoneName;
export const TimeZoneContext = React.createContext();
