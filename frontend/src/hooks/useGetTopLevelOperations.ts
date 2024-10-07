import getTopLevelOperations, {
	type ServiceDataProps,
} from 'api/metrics/getTopLevelOperations';
import { type QueryKey, type UseQueryResult, useQuery } from 'react-query';

interface UseGetTopLevelOperationsParams {
	start: number;
	end: number;
}

type UseGetTopLevelOperations = (
	queryKey: QueryKey,
	params: UseGetTopLevelOperationsParams,
) => UseQueryResult<ServiceDataProps>;

const useGetTopLevelOperations: UseGetTopLevelOperations = (queryKey, params) =>
	useQuery<ServiceDataProps>({
		queryKey,
		queryFn: (): Promise<ServiceDataProps> =>
			getTopLevelOperations({ start: params.start, end: params.end }),
	});

export default useGetTopLevelOperations;
