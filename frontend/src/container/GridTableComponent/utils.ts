/* eslint-disable sonarjs/cognitive-complexity */
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { ThresholdProps } from 'container/NewWidget/RightContainer/Threshold/types';
import type { QueryTableProps } from 'container/QueryTable/QueryTable.intefaces';
import { QUERY_TABLE_CONFIG } from 'container/QueryTable/config';
import type { RowData } from 'lib/query/createTableColumnsFromQuery';
import { isEmpty, isNaN } from 'lodash-es';
import type { Query } from 'types/api/queryBuilder/queryBuilderData';
import { EQueryType } from 'types/common/dashboard';

// Helper function to evaluate the condition based on the operator
function evaluateCondition(
	operator: string | undefined,
	value: number,
	thresholdValue: number,
): boolean {
	switch (operator) {
		case '>':
			return value > thresholdValue;
		case '<':
			return value < thresholdValue;
		case '>=':
			return value >= thresholdValue;
		case '<=':
			return value <= thresholdValue;
		case '==':
			return value === thresholdValue;
		default:
			return false;
	}
}

export function findMatchingThreshold(
	thresholds: ThresholdProps[],
	label: string,
	value: number,
): {
	threshold: ThresholdProps;
	hasMultipleMatches: boolean;
} {
	const matchingThresholds: ThresholdProps[] = [];
	let hasMultipleMatches = false;

	thresholds.forEach((threshold) => {
		if (
			threshold.thresholdValue !== undefined &&
			threshold.thresholdTableOptions === label &&
			evaluateCondition(
				threshold.thresholdOperator,
				value,
				threshold.thresholdValue,
			)
		) {
			matchingThresholds.push(threshold);
		}
	});

	if (matchingThresholds.length > 1) {
		hasMultipleMatches = true;
	}

	return {
		threshold: matchingThresholds[0],
		hasMultipleMatches,
	};
}

export interface TableData {
	columns: { name: string; queryName: string; isValueColumn: boolean }[];
	rows: { data: any }[];
}

export function getQueryLegend(
	currentQuery: Query,
	queryName: string,
): string | undefined {
	let legend: string | undefined;
	switch (currentQuery.queryType) {
		case EQueryType.QUERY_BUILDER:
			// check if the value is present in the queries
			legend = currentQuery.builder.queryData.find(
				(query) => query.queryName === queryName,
			)?.legend;

			if (!legend) {
				// check if the value is present in the formula
				legend = currentQuery.builder.queryFormulas.find(
					(query) => query.queryName === queryName,
				)?.legend;
			}
			break;
		case EQueryType.CLICKHOUSE:
			legend = currentQuery.clickhouse_sql.find(
				(query) => query.name === queryName,
			)?.legend;
			break;
		case EQueryType.PROM:
			legend = currentQuery.promql.find(
				(query) => query.name === queryName,
			)?.legend;
			break;
		default:
			legend = undefined;
			break;
	}

	return legend;
}

export function sortFunction(
	a: RowData,
	b: RowData,
	item: {
		name: string;
		queryName: string;
		isValueColumn: boolean;
	},
): number {
	// assumption :- number values is bigger than 'n/a'
	const valueA = Number(a[`${item.name}_without_unit`] ?? a[item.name]);
	const valueB = Number(b[`${item.name}_without_unit`] ?? b[item.name]);

	// if both the values are numbers then return the difference here
	if (!isNaN(valueA) && !isNaN(valueB)) {
		return valueA - valueB;
	}

	// if valueB is a number then make it bigger value
	if (isNaN(valueA) && !isNaN(valueB)) {
		return -1;
	}

	// if valueA is number make it the bigger value
	if (!isNaN(valueA) && isNaN(valueB)) {
		return 1;
	}

	// if both of them are strings do the localecompare
	return ((a[item.name] as string) || '').localeCompare(
		(b[item.name] as string) || '',
	);
}
export function createColumnsAndDataSource(
	data: TableData,
	currentQuery: Query,
	renderColumnCell?: QueryTableProps['renderColumnCell'],
): { columns: ColumnsType<RowData>; dataSource: RowData[] } {
	const columns: ColumnsType<RowData> =
		data.columns?.reduce<ColumnsType<RowData>>((acc, item) => {
			// is the column is the value column then we need to check for the available legend
			const legend = item.isValueColumn
				? getQueryLegend(currentQuery, item.queryName)
				: undefined;

			const column: ColumnType<RowData> = {
				dataIndex: item.name,
				// if no legend present then rely on the column name value
				title: !isEmpty(legend) ? legend : item.name,
				width: QUERY_TABLE_CONFIG.width,
				render: renderColumnCell?.[item.name],
				sorter: (a: RowData, b: RowData): number => sortFunction(a, b, item),
			};

			return [...acc, column];
		}, []) || [];

	// the rows returned have data encapsulation hence removing the same here
	const dataSource = data.rows?.map((d) => d.data) || [];

	return { columns, dataSource };
}
