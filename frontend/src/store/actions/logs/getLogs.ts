import GetLogs from 'api/logs/GetLogs';
import type { Dispatch } from 'redux';
import type AppActions from 'types/actions';
import { SET_LOADING, SET_LOGS } from 'types/actions/logs';
import type { Props } from 'types/api/logs/getLogs';

export const getLogs =
	(props: Props): ((dispatch: Dispatch<AppActions>) => void) =>
	async (dispatch): Promise<void> => {
		dispatch({
			type: SET_LOADING,
			payload: true,
		});

		const response = await GetLogs(props);

		if (response.payload)
			dispatch({
				type: SET_LOGS,
				payload: response.payload,
			});
		else
			dispatch({
				type: SET_LOGS,
				payload: [],
			});

		dispatch({
			type: SET_LOADING,
			payload: false,
		});
	};
