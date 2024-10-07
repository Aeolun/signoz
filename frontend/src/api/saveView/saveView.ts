import axios from 'api';
import type { AxiosResponse } from 'axios';
import type {
	SaveViewPayloadProps,
	SaveViewProps,
} from 'types/api/saveViews/types';

export const saveView = ({
	compositeQuery,
	sourcePage,
	viewName,
	extraData,
}: SaveViewProps): Promise<AxiosResponse<SaveViewPayloadProps>> =>
	axios.post('/explorer/views', {
		name: viewName,
		sourcePage,
		compositeQuery,
		extraData,
	});
