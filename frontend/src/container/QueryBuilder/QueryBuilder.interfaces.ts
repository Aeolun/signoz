import type { PANEL_TYPES } from 'constants/queryBuilder';
import type { WhereClauseConfig } from 'hooks/queryBuilder/useAutoComplete';
import type { ReactNode } from 'react';
import type { IBuilderQuery } from 'types/api/queryBuilder/queryBuilderData';
import type { DataSource } from 'types/common/queryBuilder';

import type { OrderByFilterProps } from './filters/OrderByFilter/OrderByFilter.interfaces';

type FilterConfigs = {
	[Key in keyof Omit<IBuilderQuery, 'filters'>]: {
		isHidden: boolean;
		isDisabled: boolean;
	};
} & { filters: WhereClauseConfig };

export type QueryBuilderConfig =
	| {
			queryVariant: 'static';
			initialDataSource: DataSource;
	  }
	| { queryVariant: 'dropdown' };

export type QueryBuilderProps = {
	config?: QueryBuilderConfig;
	panelType: PANEL_TYPES;
	actions?: ReactNode;
	filterConfigs?: Partial<FilterConfigs>;
	queryComponents?: { renderOrderBy?: (props: OrderByFilterProps) => ReactNode };
	isListViewPanel?: boolean;
	showFunctions?: boolean;
	version: string;
};
