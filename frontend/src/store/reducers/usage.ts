/* eslint-disable sonarjs/no-small-switch */
import { type Action, ActionTypes, type UsageDataItem } from 'store/actions';

export const usageDataReducer = (
	state: UsageDataItem[] = [],
	action?: Action,
): UsageDataItem[] => {
	switch (action?.type) {
		case ActionTypes.getUsageData:
			return action.payload;
		default:
			return state;
	}
};
