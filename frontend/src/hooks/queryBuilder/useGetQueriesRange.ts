import { REACT_QUERY_KEY } from 'constants/reactQueryKeys';
import {
	GetMetricQueryRange,
	type GetQueryResultsProps,
} from 'lib/dashboard/getQueryResults';
import { useMemo } from 'react';
import {
	type QueryKey,
	type UseQueryOptions,
	type UseQueryResult,
	useQueries,
} from 'react-query';
import type { SuccessResponse } from 'types/api';
import type { MetricRangePayloadProps } from 'types/api/metrics/getQueryRange';

export const useGetQueriesRange = (
	requestData: GetQueryResultsProps[],
	version: string,
	options: UseQueryOptions<SuccessResponse<MetricRangePayloadProps>, Error>,
): UseQueryResult<SuccessResponse<MetricRangePayloadProps>, Error>[] => {
	const queryKey = useMemo(() => {
		if (options?.queryKey) {
			return [...options.queryKey];
		}
		return [REACT_QUERY_KEY.GET_QUERY_RANGE, requestData];
	}, [options?.queryKey, requestData]);

	const queryData = requestData.map((request, index) => ({
		queryFn: async (): Promise<SuccessResponse<MetricRangePayloadProps>> =>
			GetMetricQueryRange(request, version),
		...options,
		queryKey: [...queryKey, index] as QueryKey,
	}));

	return useQueries(queryData);
};
