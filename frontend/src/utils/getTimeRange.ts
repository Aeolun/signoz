import getStartEndRangeTime from 'lib/getStartEndRangeTime';
import type { UseQueryResult } from 'react-query';
import store from 'store';
import type { SuccessResponse } from 'types/api';
import type {
	MetricRangePayloadProps,
	QueryRangePayload,
} from 'types/api/metrics/getQueryRange';

export const getTimeRange = (
	widgetQueryRange?: UseQueryResult<
		SuccessResponse<MetricRangePayloadProps, unknown>,
		Error
	>,
): Record<string, number> => {
	const widgetParams =
		(widgetQueryRange?.data?.params as QueryRangePayload) || null;

	if (widgetParams?.start && widgetParams?.end) {
		return {
			startTime: widgetParams.start / 1000,
			endTime: widgetParams.end / 1000,
		};
	}
	const { globalTime } = store.getState();

	const { start: globalStartTime, end: globalEndTime } = getStartEndRangeTime({
		type: 'GLOBAL_TIME',
		interval: globalTime.selectedTime,
	});

	return {
		startTime: (Number.parseInt(globalStartTime, 10) * 1e3) / 1000,
		endTime: (Number.parseInt(globalEndTime, 10) * 1e3) / 1000,
	};
};
