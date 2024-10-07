import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import createQueryParams from 'lib/createQueryParams';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { PayloadProps, Props } from 'types/api/errors/getByErrorId';

const getById = async (
	props: Props,
): Promise<SuccessResponse<PayloadProps> | ErrorResponse> => {
	try {
		const response = await axios.get(
			`/errorFromErrorID?${createQueryParams({
				...props,
			})}`,
		);

		return {
			statusCode: 200,
			error: null,
			message: response.data.message,
			payload: response.data,
		};
	} catch (error) {
		return ErrorResponseHandler(error as AxiosError);
	}
};

export default getById;
