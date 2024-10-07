import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { PayloadProps, Props } from 'types/api/user/loginPrecheck';

const loginPrecheck = async (
	props: Props,
): Promise<SuccessResponse<PayloadProps> | ErrorResponse> => {
	try {
		const response = await axios.get(
			`/loginPrecheck?email=${encodeURIComponent(
				props.email,
			)}&ref=${encodeURIComponent(window.location.href)}`,
		);

		return {
			statusCode: 200,
			error: null,
			message: response.statusText,
			payload: response.data.data,
		};
	} catch (error) {
		return ErrorResponseHandler(error as AxiosError);
	}
};

export default loginPrecheck;
