import { getAllViews } from 'api/saveView/getAllViews';
import type { AxiosError, AxiosResponse } from 'axios';
import { type UseQueryResult, useQuery } from 'react-query';
import type { AllViewsProps } from 'types/api/saveViews/types';
import type { DataSource } from 'types/common/queryBuilder';

export const useGetAllViews = (
	sourcepage: DataSource,
): UseQueryResult<AxiosResponse<AllViewsProps>, AxiosError> =>
	useQuery<AxiosResponse<AllViewsProps>, AxiosError>({
		queryKey: [{ sourcepage }],
		queryFn: () => getAllViews(sourcepage),
	});
