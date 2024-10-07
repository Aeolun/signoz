import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { PayloadProps, Props } from 'types/api/user/deleteInvite';

const deleteInvite = async (
	props: Props,
): Promise<SuccessResponse<PayloadProps> | ErrorResponse> => {
	try {
		const response = await axios.delete(`/invite/${props.email}`);

		return {
			statusCode: 200,
			error: null,
			message: response.data.status,
			payload: response.data,
		};
	} catch (error) {
		return ErrorResponseHandler(error as AxiosError);
	}
};

export default deleteInvite;
