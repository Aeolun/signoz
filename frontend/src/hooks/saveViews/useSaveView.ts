import { saveView } from 'api/saveView/saveView';
import type { AxiosResponse } from 'axios';
import { type UseMutationResult, useMutation } from 'react-query';
import type {
	SaveViewPayloadProps,
	SaveViewProps,
} from 'types/api/saveViews/types';

export const useSaveView = ({
	compositeQuery,
	sourcePage,
	viewName,
	extraData,
}: SaveViewProps): UseMutationResult<
	AxiosResponse<SaveViewPayloadProps>,
	Error,
	SaveViewProps,
	SaveViewPayloadProps
> =>
	useMutation({
		mutationKey: [viewName, sourcePage, compositeQuery, extraData],
		mutationFn: saveView,
	});
