import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { AppState } from 'store/reducers';
import type { GlobalReducer } from 'types/reducer/globalTime';

import type { ServiceMetricsProps } from '../types';
import { getQueryRangeRequestData } from '../utils';
import ServiceMetricTable from './ServiceMetricTable';

function ServiceMetricsApplication({
	topLevelOperations,
}: ServiceMetricsProps): JSX.Element {
	const {
		minTime,
		maxTime,
		selectedTime: globalSelectedInterval,
	} = useSelector<AppState, GlobalReducer>((state) => state.globalTime);

	const queryRangeRequestData = useMemo(
		() =>
			getQueryRangeRequestData({
				topLevelOperations,
				minTime,
				maxTime,
				globalSelectedInterval,
			}),
		[globalSelectedInterval, maxTime, minTime, topLevelOperations],
	);
	return (
		<ServiceMetricTable
			topLevelOperations={topLevelOperations}
			queryRangeRequestData={queryRangeRequestData}
		/>
	);
}

export default ServiceMetricsApplication;
