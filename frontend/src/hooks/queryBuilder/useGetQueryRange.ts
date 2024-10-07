import { PANEL_TYPES } from 'constants/queryBuilder';
import { REACT_QUERY_KEY } from 'constants/reactQueryKeys';
import {
	GetMetricQueryRange,
	type GetQueryResultsProps,
} from 'lib/dashboard/getQueryResults';
import { useMemo } from 'react';
import {
	type UseQueryOptions,
	type UseQueryResult,
	useQuery,
} from 'react-query';
import type { SuccessResponse } from 'types/api';
import type { MetricRangePayloadProps } from 'types/api/metrics/getQueryRange';

type UseGetQueryRange = (
	requestData: GetQueryResultsProps,
	version: string,
	options?: UseQueryOptions<SuccessResponse<MetricRangePayloadProps>, Error>,
	headers?: Record<string, string>,
) => UseQueryResult<SuccessResponse<MetricRangePayloadProps>, Error>;

export const useGetQueryRange: UseGetQueryRange = (
	requestData,
	version,
	options,
	headers,
) => {
	const newRequestData: GetQueryResultsProps = useMemo(
		() => ({
			...requestData,
			graphType:
				requestData.graphType === PANEL_TYPES.BAR
					? PANEL_TYPES.TIME_SERIES
					: requestData.graphType,
		}),
		[requestData],
	);

	const queryKey = useMemo(() => {
		if (options?.queryKey && Array.isArray(options.queryKey)) {
			return [...options.queryKey];
		}

		if (options?.queryKey && typeof options.queryKey === 'string') {
			return options.queryKey;
		}

		return [REACT_QUERY_KEY.GET_QUERY_RANGE, newRequestData];
	}, [options?.queryKey, newRequestData]);

	return useQuery<SuccessResponse<MetricRangePayloadProps>, Error>({
		queryFn: async ({ signal }) =>
			GetMetricQueryRange(requestData, version, signal, headers),
		...options,
		queryKey,
	});
};
