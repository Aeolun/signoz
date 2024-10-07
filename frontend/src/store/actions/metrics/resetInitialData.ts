import type { Dispatch } from 'redux';
import type { AppState } from 'store/reducers';
import type AppActions from 'types/actions';

export const ResetInitialData =
	(): ((dispatch: Dispatch<AppActions>, getState: () => AppState) => void) =>
	(dispatch): void => {
		dispatch({
			type: 'RESET_INITIAL_APPLICATION_DATA',
		});
	};
