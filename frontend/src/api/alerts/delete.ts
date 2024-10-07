import axios from 'api';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { PayloadProps, Props } from 'types/api/alerts/delete';

const deleteAlerts = async (
	props: Props,
): Promise<SuccessResponse<PayloadProps> | ErrorResponse> => {
	const response = await axios.delete(`/rules/${props.id}`);

	return {
		statusCode: 200,
		error: null,
		message: response.data.status,
		payload: response.data.data.rules,
	};
};

export default deleteAlerts;
