import { ApiV3Instance as axios } from 'api';
import type { ApiResponse } from 'types/api';
import type { ICompositeMetricQuery } from 'types/api/alerts/compositeQuery';
import type { QueryRangePayload } from 'types/api/metrics/getQueryRange';

interface IQueryRangeFormat {
	compositeQuery: ICompositeMetricQuery;
}

export const getQueryRangeFormat = (
	props?: Partial<QueryRangePayload>,
): Promise<IQueryRangeFormat> =>
	axios
		.post<ApiResponse<IQueryRangeFormat>>('/query_range/format', props)
		.then((res) => res.data.data);
