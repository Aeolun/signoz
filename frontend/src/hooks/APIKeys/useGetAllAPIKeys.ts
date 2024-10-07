import { getAllAPIKeys } from 'api/APIKeys/getAllAPIKeys';
import type { AxiosError, AxiosResponse } from 'axios';
import { type UseQueryResult, useQuery } from 'react-query';
import type { AllAPIKeyProps } from 'types/api/pat/types';

export const useGetAllAPIKeys = (): UseQueryResult<
	AxiosResponse<AllAPIKeyProps>,
	AxiosError
> =>
	useQuery<AxiosResponse<AllAPIKeyProps>, AxiosError>({
		queryKey: ['APIKeys'],
		queryFn: () => getAllAPIKeys(),
	});
