import type { Dispatch } from 'redux';
import type AppActions from 'types/actions';
import { UPDATE_SELECTED_TAGS } from 'types/actions/trace';
import type { TraceReducer } from 'types/reducer/trace';

export const UpdateSelectedTags =
	(
		selectedTags: TraceReducer['selectedTags'],
	): ((dispatch: Dispatch<AppActions>) => void) =>
	(dispatch): void => {
		dispatch({
			type: UPDATE_SELECTED_TAGS,
			payload: {
				selectedTags,
			},
		});
	};
