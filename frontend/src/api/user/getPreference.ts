import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { PayloadProps } from 'types/api/user/getUserPreference';

const getPreference = async (): Promise<
	SuccessResponse<PayloadProps> | ErrorResponse
> => {
	try {
		const response = await axios.get('/userPreferences');

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

export default getPreference;
