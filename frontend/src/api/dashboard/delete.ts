import axios from 'api';
import type { PayloadProps, Props } from 'types/api/dashboard/delete';

const deleteDashboard = (props: Props): Promise<PayloadProps> =>
	axios
		.delete<PayloadProps>(`/dashboards/${props.uuid}`)
		.then((response) => response.data);

export default deleteDashboard;
