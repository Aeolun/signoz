import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { PayloadProps, Props } from 'types/api/logs/addToSelectedFields';

const addToSelectedFields = async (
	props: Props,
): Promise<SuccessResponse<PayloadProps> | ErrorResponse> => {
	try {
		const data = await axios.post('/logs/fields', props);
		return {
			statusCode: 200,
			error: null,
			message: '',
			payload: data.data,
		};
	} catch (error) {
		return Promise.reject(ErrorResponseHandler(error as AxiosError));
	}
};

export default addToSelectedFields;
