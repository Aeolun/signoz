import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { PayloadProps, Props } from 'types/api/channels/createSlack';

const testSlack = async (
	props: Props,
): Promise<SuccessResponse<PayloadProps> | ErrorResponse> => {
	try {
		const response = await axios.post('/testChannel', {
			name: props.name,
			slack_configs: [
				{
					send_resolved: true,
					api_url: props.api_url,
					channel: props.channel,
					title: props.title,
					text: props.text,
				},
			],
		});

		return {
			statusCode: 200,
			error: null,
			message: 'Success',
			payload: response.data.data,
		};
	} catch (error) {
		return ErrorResponseHandler(error as AxiosError);
	}
};

export default testSlack;
