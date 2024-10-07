import type { LogViewMode } from 'container/LogsTable';
import type { Pagination } from 'hooks/queryPagination';
import type { ILogQLParsedQueryItem } from 'lib/logql/types';
import type { OrderPreferenceItems } from 'pages/Logs/config';
import type { IFields } from 'types/api/logs/fields';
import type { TLogsLiveTailState } from 'types/api/logs/liveTail';
import type { ILog } from 'types/api/logs/log';
import type { ILogsAggregate } from 'types/api/logs/logAggregate';

export interface ILogsReducer {
	fields: IFields;
	searchFilter: {
		queryString: string;
		parsedQuery: ILogQLParsedQueryItem[];
	};
	logs: ILog[];
	logLinesPerPage: Pagination['limit'];
	linesPerRow: number;
	viewMode: LogViewMode;
	idEnd: string;
	idStart: string;
	isLoading: boolean;
	isLoadingAggregate: boolean;
	logsAggregate: ILogsAggregate[];
	selectedLogId: string | null;
	detailedLog: null | ILog;
	liveTail: TLogsLiveTailState;
	liveTailStartRange: number; // time in minutes
	order: OrderPreferenceItems;
}

export default ILogsReducer;
