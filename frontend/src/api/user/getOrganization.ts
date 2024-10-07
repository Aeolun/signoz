import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { PayloadProps } from 'types/api/user/getOrganization';

const getOrganization = async (
	token?: string,
): Promise<SuccessResponse<PayloadProps> | ErrorResponse> => {
	try {
		const response = await axios.get('/org', {
			headers: {
				Authorization: `bearer ${token}`,
			},
		});

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

export default getOrganization;
