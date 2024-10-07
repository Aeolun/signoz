import type { TableProps } from 'antd';
import type { LogsExplorerTableProps } from 'container/LogsExplorerTable/LogsExplorerTable.interfaces';
import type {
	ThresholdOperators,
	ThresholdProps,
} from 'container/NewWidget/RightContainer/Threshold/types';
import type { RowData } from 'lib/query/createTableColumnsFromQuery';
import type { ColumnUnit } from 'types/api/dashboard/getAll';
import type { Query } from 'types/api/queryBuilder/queryBuilderData';

export type GridTableComponentProps = {
	query: Query;
	thresholds?: ThresholdProps[];
	columnUnits?: ColumnUnit;
	tableProcessedDataRef?: React.MutableRefObject<RowData[]>;
	sticky?: TableProps<RowData>['sticky'];
	searchTerm?: string;
} & Pick<LogsExplorerTableProps, 'data'> &
	Omit<TableProps<RowData>, 'columns' | 'dataSource'>;

export type RequiredThresholdProps = Omit<
	ThresholdProps,
	'thresholdTableOptions' | 'thresholdOperator' | 'thresholdValue'
> & {
	thresholdTableOptions: string;
	thresholdOperator: ThresholdOperators;
	thresholdValue: number;
};
