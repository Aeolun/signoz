import axios from 'api';
import { ErrorResponseHandler } from 'api/ErrorResponseHandler';
import type { AxiosError } from 'axios';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { AlertRuleStatsPayload } from 'types/api/alerts/def';
import type { RuleStatsProps } from 'types/api/alerts/ruleStats';

const ruleStats = async (
	props: RuleStatsProps,
): Promise<SuccessResponse<AlertRuleStatsPayload> | ErrorResponse> => {
	try {
		const response = await axios.post(`/rules/${props.id}/history/stats`, {
			start: props.start,
			end: props.end,
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

export default ruleStats;
