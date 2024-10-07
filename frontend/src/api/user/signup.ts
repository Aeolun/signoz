import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { PayloadProps } from 'types/api/user/loginPrecheck';
import type { Props } from 'types/api/user/signup';

const signup = async (
	props: Props,
): Promise<SuccessResponse<null | PayloadProps> | ErrorResponse> => {
	try {
		const response = await axios.post('/register', {
			...props,
		});
		return {
			statusCode: 200,
			error: null,
			message: response.data.status,
			payload: response.data?.data,
		};
	} catch (error) {
		return ErrorResponseHandler(error as AxiosError);
	}
};

export default signup;
