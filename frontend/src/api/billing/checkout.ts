import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type {
	CheckoutRequestPayloadProps,
	CheckoutSuccessPayloadProps,
} from 'types/api/billing/checkout';

const updateCreditCardApi = async (
	props: CheckoutRequestPayloadProps,
): Promise<SuccessResponse<CheckoutSuccessPayloadProps> | ErrorResponse> => {
	try {
		const response = await axios.post('/checkout', {
			licenseKey: props.licenseKey,
			successURL: props.successURL,
			cancelURL: props.cancelURL, // temp
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

export default updateCreditCardApi;
