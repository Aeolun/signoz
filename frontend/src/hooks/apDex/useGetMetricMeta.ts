import { getMetricMeta } from 'api/metrics/ApDex/getMetricMeta';
import type { AxiosError, AxiosResponse } from 'axios';
import { type UseQueryResult, useQuery } from 'react-query';
import type { MetricMetaProps } from 'types/api/metrics/getApDex';

export const useGetMetricMeta = (
	metricName: string,
	servicename: string,
): UseQueryResult<AxiosResponse<MetricMetaProps>, AxiosError> =>
	useQuery<AxiosResponse<MetricMetaProps>, AxiosError>({
		queryKey: [{ metricName, servicename }],
		queryFn: async () => getMetricMeta(metricName, servicename),
	});
