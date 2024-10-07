import axios from 'api';
import type { ApiResponse } from 'types/api';
import type { Props } from 'types/api/dashboard/get';
import type { Dashboard } from 'types/api/dashboard/getAll';

const getDashboard = (props: Props): Promise<Dashboard> =>
	axios
		.get<ApiResponse<Dashboard>>(`/dashboards/${props.uuid}`)
		.then((res) => res.data.data);

export default getDashboard;
