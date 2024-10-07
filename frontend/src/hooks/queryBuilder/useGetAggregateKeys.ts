import { getAggregateKeys } from 'api/queryBuilder/getAttributeKeys';
import { QueryBuilderKeys } from 'constants/queryBuilder';
import { useMemo } from 'react';
import {
	type UseQueryOptions,
	type UseQueryResult,
	useQuery,
} from 'react-query';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { IGetAttributeKeysPayload } from 'types/api/queryBuilder/getAttributeKeys';
import type { IQueryAutocompleteResponse } from 'types/api/queryBuilder/queryAutocompleteResponse';

type UseGetAttributeKeys = (
	requestData: IGetAttributeKeysPayload,
	options?: UseQueryOptions<
		SuccessResponse<IQueryAutocompleteResponse> | ErrorResponse
	>,
) => UseQueryResult<
	SuccessResponse<IQueryAutocompleteResponse> | ErrorResponse
>;

export const useGetAggregateKeys: UseGetAttributeKeys = (
	requestData,
	options,
) => {
	const queryKey = useMemo(() => {
		if (options?.queryKey && Array.isArray(options.queryKey)) {
			return [QueryBuilderKeys.GET_AGGREGATE_KEYS, ...options.queryKey];
		}
		return [QueryBuilderKeys.GET_AGGREGATE_KEYS, requestData];
	}, [options?.queryKey, requestData]);

	return useQuery<SuccessResponse<IQueryAutocompleteResponse> | ErrorResponse>({
		queryKey,
		queryFn: () => getAggregateKeys(requestData),
		...options,
	});
};
