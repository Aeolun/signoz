import type { ILog } from 'types/api/logs/log';
import type { IBuilderQuery } from 'types/api/queryBuilder/queryBuilderData';

export type LogsExplorerListProps = {
	isLoading: boolean;
	isFetching: boolean;
	currentStagedQueryData: IBuilderQuery | null;
	logs: ILog[];
	onEndReached: (index: number) => void;
	isError: boolean;
	isFilterApplied: boolean;
};
