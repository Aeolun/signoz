import type { NotificationInstance } from 'antd/es/notification/interface';
import type { AxiosResponse } from 'axios';
import type { SaveViewWithNameProps } from 'components/ExplorerCard/types';
import type { PANEL_TYPES } from 'constants/queryBuilder';
import type { Dispatch, SetStateAction } from 'react';
import type { UseMutateAsyncFunction } from 'react-query';
import type { ICompositeMetricQuery } from 'types/api/alerts/compositeQuery';
import type {
	SaveViewPayloadProps,
	SaveViewProps,
} from 'types/api/saveViews/types';
import type {
	DataSource,
	QueryBuilderContextType,
} from 'types/common/queryBuilder';

import type { PreservedViewsTypes } from './constants';

export interface SaveNewViewHandlerProps {
	viewName: string;
	compositeQuery: ICompositeMetricQuery;
	sourcePage: DataSource;
	extraData: SaveViewProps['extraData'];
	panelType: PANEL_TYPES | null;
	notifications: NotificationInstance;
	refetchAllView: SaveViewWithNameProps['refetchAllView'];
	saveViewAsync: UseMutateAsyncFunction<
		AxiosResponse<SaveViewPayloadProps>,
		Error,
		SaveViewProps,
		SaveViewPayloadProps
	>;
	handlePopOverClose: SaveViewWithNameProps['handlePopOverClose'];
	redirectWithQueryBuilderData: QueryBuilderContextType['redirectWithQueryBuilderData'];
	setNewViewName: Dispatch<SetStateAction<string>>;
}

export type PreservedViewType =
	| PreservedViewsTypes.LOGS
	| PreservedViewsTypes.TRACES;

export type PreservedViewsInLocalStorage = Partial<
	Record<PreservedViewType, { key: string; value: string }>
>;
