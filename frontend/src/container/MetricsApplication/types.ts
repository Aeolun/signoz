import type { ReactNode } from 'react';
import type { Widgets } from 'types/api/dashboard/getAll';
import type {
	Query,
	TagFilterItem,
} from 'types/api/queryBuilder/queryBuilderData';

import type { IServiceName } from './Tabs/types';

export interface GetWidgetQueryBuilderProps {
	query: Widgets['query'];
	title?: ReactNode;
	panelTypes: Widgets['panelTypes'];
	yAxisUnit?: Widgets['yAxisUnit'];
	id?: Widgets['id'];
	fillSpans?: Widgets['fillSpans'];
}

export interface NavigateToTraceProps {
	servicename: string;
	operation: string;
	minTime: number;
	maxTime: number;
	selectedTraceTags: string;
	apmToTraceQuery: Query;
}

export interface DatabaseCallsRPSProps extends DatabaseCallProps {
	legend: '{{db_system}}';
}

export interface DatabaseCallProps {
	servicename: IServiceName['servicename'];
	tagFilterItems: TagFilterItem[];
}
