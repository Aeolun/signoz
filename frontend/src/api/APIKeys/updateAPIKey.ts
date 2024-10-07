import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { PayloadProps, UpdateAPIKeyProps } from 'types/api/pat/types';

const updateAPIKey = async (
	props: UpdateAPIKeyProps,
): Promise<SuccessResponse<PayloadProps> | ErrorResponse> => {
	try {
		const response = await axios.put(`/pats/${props.id}`, {
			...props.data,
		});

		return {
			statusCode: 200,
			error: null,
			message: response.data.status,
			payload: response.data.data,
		};
	} catch (error) {
		return ErrorResponseHandler(error as AxiosError);
	}
};

export default updateAPIKey;
