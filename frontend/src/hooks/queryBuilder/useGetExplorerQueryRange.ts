import { PANEL_TYPES, initialQueriesMap } from 'constants/queryBuilder';
import { REACT_QUERY_KEY } from 'constants/reactQueryKeys';
import { type MutableRefObject, useMemo } from 'react';
import type { UseQueryOptions, UseQueryResult } from 'react-query';
import { useSelector } from 'react-redux';
import type { AppState } from 'store/reducers';
import type { SuccessResponse } from 'types/api';
import type { MetricRangePayloadProps } from 'types/api/metrics/getQueryRange';
import type { Query } from 'types/api/queryBuilder/queryBuilderData';
import type { GlobalReducer } from 'types/reducer/globalTime';

import { useGetQueryRange } from './useGetQueryRange';
import { useQueryBuilder } from './useQueryBuilder';

export const useGetExplorerQueryRange = (
	requestData: Query | null,
	panelType: PANEL_TYPES | null,
	version: string,
	options?: UseQueryOptions<SuccessResponse<MetricRangePayloadProps>, Error>,
	params?: Record<string, unknown>,
	isDependentOnQB = true,
	keyRef?: MutableRefObject<any>,
	headers?: Record<string, string>,
): UseQueryResult<SuccessResponse<MetricRangePayloadProps>, Error> => {
	const { isEnabledQuery } = useQueryBuilder();
	const {
		selectedTime: globalSelectedInterval,
		minTime,
		maxTime,
	} = useSelector<AppState, GlobalReducer>((state) => state.globalTime);

	const key =
		typeof options?.queryKey === 'string'
			? options?.queryKey
			: REACT_QUERY_KEY.GET_QUERY_RANGE;

	const isEnabled = useMemo(() => {
		if (!options) return isEnabledQuery;
		if (typeof options.enabled === 'boolean') {
			return options.enabled && (!isDependentOnQB || isEnabledQuery);
		}

		return isEnabledQuery;
	}, [options, isEnabledQuery, isDependentOnQB]);

	if (keyRef) {
		// eslint-disable-next-line no-param-reassign
		keyRef.current = [key, globalSelectedInterval, requestData, minTime, maxTime];
	}

	return useGetQueryRange(
		{
			graphType: panelType || PANEL_TYPES.LIST,
			selectedTime: 'GLOBAL_TIME',
			globalSelectedInterval,
			query: requestData || initialQueriesMap.metrics,
			params,
		},
		version,
		{
			...options,
			retry: false,
			queryKey: [key, globalSelectedInterval, requestData, minTime, maxTime],
			enabled: isEnabled,
		},
		headers,
	);
};
