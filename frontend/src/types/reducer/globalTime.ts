import type { Time } from 'container/TopNav/DateTimeSelection/config';
import type {
	CustomTimeType,
	Time as TimeV2,
} from 'container/TopNav/DateTimeSelectionV2/config';
import type { GlobalTime } from 'types/actions/globalTime';

export interface GlobalReducer {
	maxTime: GlobalTime['maxTime'];
	minTime: GlobalTime['minTime'];
	loading: boolean;
	selectedTime: Time | TimeV2 | CustomTimeType;
	isAutoRefreshDisabled: boolean;
	selectedAutoRefreshInterval: string;
}
