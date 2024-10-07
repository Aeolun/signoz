import type { TableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { DownloadOptions } from 'container/Download/Download.types';
import type { RowData } from 'lib/query/createTableColumnsFromQuery';
import type { ReactNode } from 'react';
import type { Query } from 'types/api/queryBuilder/queryBuilderData';
import type { QueryDataV3 } from 'types/api/widgets/getQuery';

export type QueryTableProps = Omit<
	TableProps<RowData>,
	'columns' | 'dataSource'
> & {
	queryTableData: QueryDataV3[];
	query: Query;
	renderActionCell?: (record: RowData) => ReactNode;
	modifyColumns?: (columns: ColumnsType<RowData>) => ColumnsType<RowData>;
	renderColumnCell?: Record<string, (record: RowData) => ReactNode>;
	downloadOption?: DownloadOptions;
	columns?: ColumnsType<RowData>;
	dataSource?: RowData[];
	sticky?: TableProps<RowData>['sticky'];
	searchTerm?: string;
};
