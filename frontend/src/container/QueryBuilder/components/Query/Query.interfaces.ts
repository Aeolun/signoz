import type { QueryBuilderProps } from 'container/QueryBuilder/QueryBuilder.interfaces';
import type { IBuilderQuery } from 'types/api/queryBuilder/queryBuilderData';

export type QueryProps = {
	index: number;
	isAvailableToDisable: boolean;
	query: IBuilderQuery;
	queryVariant: 'static' | 'dropdown';
	isListViewPanel?: boolean;
	showFunctions?: boolean;
	version: string;
} & Pick<QueryBuilderProps, 'filterConfigs' | 'queryComponents'>;
