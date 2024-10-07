import { getAllIngestionKeys } from 'api/IngestionKeys/getAllIngestionKeys';
import type { AxiosError, AxiosResponse } from 'axios';
import { type UseQueryResult, useQuery } from 'react-query';
import type {
	AllIngestionKeyProps,
	GetIngestionKeyProps,
} from 'types/api/ingestionKeys/types';

export const useGetAllIngestionsKeys = (
	props: GetIngestionKeyProps,
): UseQueryResult<AxiosResponse<AllIngestionKeyProps>, AxiosError> =>
	useQuery<AxiosResponse<AllIngestionKeyProps>, AxiosError>({
		queryKey: [`IngestionKeys-${props.page}-${props.search}`],
		queryFn: () => getAllIngestionKeys(props),
	});
