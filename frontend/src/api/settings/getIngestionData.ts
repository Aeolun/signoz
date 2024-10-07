import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { IngestionResponseProps } from 'types/api/settings/ingestion';

const getIngestionData = async (): Promise<
	SuccessResponse<IngestionResponseProps> | ErrorResponse
> => {
	try {
		const response = await axios.get('/settings/ingestion_key');

		return {
			statusCode: 200,
			error: null,
			message: 'Success',
			payload: response.data,
		};
	} catch (error) {
		return ErrorResponseHandler(error as AxiosError);
	}
};

export default getIngestionData;
