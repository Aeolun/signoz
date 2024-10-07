import { FastBackwardOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import Controls from 'container/Controls';
import Download from 'container/Download/Download';
import { getGlobalTime } from 'container/LogsSearchFilter/utils';
import { getMinMax } from 'container/TopNav/AutoRefresh/config';
import dayjs from 'dayjs';
import type { Pagination } from 'hooks/queryPagination';
import { FlatLogData } from 'lib/logs/flatLogData';
import { OrderPreferenceItems } from 'pages/Logs/config';
import { memo, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Dispatch } from 'redux';
import type { AppState } from 'store/reducers';
import type AppActions from 'types/actions';
import {
	GET_NEXT_LOG_LINES,
	GET_PREVIOUS_LOG_LINES,
	RESET_ID_START_AND_END,
	SET_LOG_LINES_PER_PAGE,
} from 'types/actions/logs';
import type { GlobalReducer } from 'types/reducer/globalTime';
import type { ILogsReducer } from 'types/reducer/logs';

import { Container } from './styles';

function LogControls(): JSX.Element | null {
	const {
		logLinesPerPage,
		liveTail,
		isLoading: isLogsLoading,
		isLoadingAggregate,
		logs,
		order,
	} = useSelector<AppState, ILogsReducer>((state) => state.logs);
	const globalTime = useSelector<AppState, GlobalReducer>(
		(state) => state.globalTime,
	);

	const dispatch = useDispatch<Dispatch<AppActions>>();

	const handleLogLinesPerPageChange = (e: Pagination['limit']): void => {
		dispatch({
			type: SET_LOG_LINES_PER_PAGE,
			payload: {
				logsLinesPerPage: e,
			},
		});
	};

	const handleGoToLatest = (): void => {
		const { maxTime, minTime } = getMinMax(
			globalTime.selectedTime,
			globalTime.minTime,
			globalTime.maxTime,
		);

		const updatedGlobalTime = getGlobalTime(globalTime.selectedTime, {
			maxTime,
			minTime,
		});

		if (updatedGlobalTime) {
			dispatch({
				type: RESET_ID_START_AND_END,
				payload: updatedGlobalTime,
			});
		}
	};

	const handleNavigatePrevious = (): void => {
		dispatch({
			type: GET_PREVIOUS_LOG_LINES,
		});
	};

	const handleNavigateNext = (): void => {
		dispatch({
			type: GET_NEXT_LOG_LINES,
		});
	};

	const flattenLogData = useMemo(
		() =>
			logs.map((log) => {
				const timestamp =
					typeof log.timestamp === 'string'
						? dayjs(log.timestamp).format('YYYY-MM-DD HH:mm:ss.SSS')
						: dayjs(log.timestamp / 1e6).format('YYYY-MM-DD HH:mm:ss.SSS');

				return FlatLogData({
					...log,
					timestamp,
				});
			}),
		[logs],
	);

	const isLoading = isLogsLoading || isLoadingAggregate;

	if (liveTail !== 'STOPPED') {
		return null;
	}

	return (
		<Container>
			<Download data={flattenLogData} isLoading={isLoading} fileName="log_data" />
			<Button
				loading={isLoading}
				size="small"
				type="link"
				disabled={order === OrderPreferenceItems.ASC}
				onClick={handleGoToLatest}
			>
				<FastBackwardOutlined /> Go to latest
			</Button>
			<Divider type="vertical" />
			<Controls
				isLoading={isLoading}
				totalCount={logs.length}
				countPerPage={logLinesPerPage}
				handleNavigatePrevious={handleNavigatePrevious}
				handleNavigateNext={handleNavigateNext}
				handleCountItemsPerPageChange={handleLogLinesPerPageChange}
			/>
		</Container>
	);
}

export default memo(LogControls);
