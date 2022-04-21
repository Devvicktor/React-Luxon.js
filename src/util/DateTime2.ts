//input date="2018-10-11" time="12:30 -08:00"
// output Oct 11, 2018 2:00 AM

// Language: typescript
//helper function that creates one single date parameter from a date and time string

import { DateTime } from "luxon";
import { injectIntl } from "react-intl";

export const createMomentWithTime= (