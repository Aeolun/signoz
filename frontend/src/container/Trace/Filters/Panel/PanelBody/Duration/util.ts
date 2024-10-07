import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

dayjs.extend(durationPlugin);

export const getMs = (value: string): string =>
	Number.parseFloat(
		dayjs
			.duration({
				milliseconds: Number.parseInt(value, 10) / 1000000,
			})
			.format('SSS'),
	).toFixed(2);
