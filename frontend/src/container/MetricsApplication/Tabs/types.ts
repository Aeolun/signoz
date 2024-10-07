import type { RowData } from 'lib/query/createTableColumnsFromQuery';
import type { ReactNode } from 'react';
import type { BaseAutocompleteData } from 'types/api/queryBuilder/queryAutocompleteResponse';
import type { TagFilterItem } from 'types/api/queryBuilder/queryBuilderData';
import type {
	DataSource,
	MetricAggregateOperator,
} from 'types/common/queryBuilder';

export interface IServiceName {
	servicename: string;
}

export interface TopOperationQueryFactoryProps {
	servicename: IServiceName['servicename'];
}

export interface ExternalCallDurationByAddressProps extends ExternalCallProps {
	legend: string;
}

export interface ExternalCallProps {
	servicename: IServiceName['servicename'];
	tagFilterItems: TagFilterItem[];
}

export interface BuilderQueriesProps {
	autocompleteData: BaseAutocompleteData[];
	groupBy?: BaseAutocompleteData[];
	legends: string[];
	filterItems: TagFilterItem[][];
	aggregateOperator?: string[];
	dataSource: DataSource;
	queryNameAndExpression?: string[];
}

export interface BuilderQuerieswithFormulaProps {
	autocompleteData: BaseAutocompleteData[];
	legends: string[];
	disabled: boolean[];
	groupBy?: BaseAutocompleteData[];
	expressions: string[];
	legendFormulas: string[];
	additionalItems: TagFilterItem[][];
	timeAggregateOperators: MetricAggregateOperator[];
	spaceAggregateOperators: MetricAggregateOperator[];
	dataSource: DataSource;
}

export interface OperationPerSecProps {
	servicename: IServiceName['servicename'];
	tagFilterItems: TagFilterItem[];
	topLevelOperations: string[];
}

export interface LatencyProps {
	servicename: IServiceName['servicename'];
	tagFilterItems: TagFilterItem[];
	isSpanMetricEnable?: boolean;
	topLevelOperationsRoute: string[];
}

export interface ApDexProps {
	servicename: IServiceName['servicename'];
	tagFilterItems: TagFilterItem[];
	topLevelOperationsRoute: string[];
	threashold: number;
}

export interface TableRendererProps {
	columnName: string;
	renderFunction: (record: RowData) => ReactNode;
}

export interface ApDexMetricsQueryBuilderQueriesProps extends ApDexProps {
	delta: boolean;
	metricsBuckets: number[];
}
