import axios from 'api';
import type { ApiResponse } from 'types/api';
import type { Dashboard } from 'types/api/dashboard/getAll';

export const getAllDashboardList = (): Promise<Dashboard[]> =>
	axios
		.get<ApiResponse<Dashboard[]>>('/dashboards')
		.then((res) => res.data.data);
