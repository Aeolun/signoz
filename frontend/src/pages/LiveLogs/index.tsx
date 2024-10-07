import { PANEL_TYPES } from 'constants/queryBuilder';
import LiveLogsContainer from 'container/LiveLogs/LiveLogsContainer';
import { liveLogsCompositeQuery } from 'container/LiveLogs/constants';
import { useQueryBuilder } from 'hooks/queryBuilder/useQueryBuilder';
import { useShareBuilderUrl } from 'hooks/queryBuilder/useShareBuilderUrl';
import { EventSourceProvider } from 'providers/EventSource';
import { useEffect } from 'react';
import { DataSource } from 'types/common/queryBuilder';

function LiveLogs(): JSX.Element {
	useShareBuilderUrl(liveLogsCompositeQuery);
	const { handleSetConfig } = useQueryBuilder();

	useEffect(() => {
		handleSetConfig(PANEL_TYPES.LIST, DataSource.LOGS);
	}, [handleSetConfig]);

	return (
		<EventSourceProvider>
			<LiveLogsContainer />
		</EventSourceProvider>
	);
}

export default LiveLogs;
