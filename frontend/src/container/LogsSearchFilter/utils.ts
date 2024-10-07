import type { Time } from 'container/TopNav/DateTimeSelection/config';
import type {
	CustomTimeType,
	Time as TimeV2,
} from 'container/TopNav/DateTimeSelectionV2/config';
import type { GetMinMaxPayload } from 'lib/getMinMax';

export const getGlobalTime = (
	selectedTime: Time | TimeV2 | CustomTimeType,
	globalTime: GetMinMaxPayload,
): GetMinMaxPayload | undefined => {
	if (selectedTime === 'custom') {
		return undefined;
	}
	return globalTime;
};
