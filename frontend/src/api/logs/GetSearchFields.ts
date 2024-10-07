import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { PayloadProps } from 'types/api/logs/getSearchFields';

const GetSearchFields = async (): Promise<
	SuccessResponse<PayloadProps> | ErrorResponse
> => {
	try {
		const data = await axios.get('/logs/fields');

		return {
			statusCode: 200,
			error: null,
			message: '',
			payload: data.data,
		};
	} catch (error) {
		return ErrorResponseHandler(error as AxiosError);
	}
};

export default GetSearchFields;
