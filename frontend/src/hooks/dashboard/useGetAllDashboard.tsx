import { getAllDashboardList } from 'api/dashboard/getAll';
import { REACT_QUERY_KEY } from 'constants/reactQueryKeys';
import { type UseQueryResult, useQuery } from 'react-query';
import type { Dashboard } from 'types/api/dashboard/getAll';

export const useGetAllDashboard = (): UseQueryResult<Dashboard[], unknown> =>
	useQuery<Dashboard[]>({
		queryFn: getAllDashboardList,
		queryKey: REACT_QUERY_KEY.GET_ALL_DASHBOARDS,
	});
