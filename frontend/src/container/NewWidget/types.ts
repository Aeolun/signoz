import type { PANEL_TYPES } from 'constants/queryBuilder';
import type { GetQueryResultsProps } from 'lib/dashboard/getQueryResults';
import type { Dispatch, SetStateAction } from 'react';
import type { UseQueryResult } from 'react-query';
import type { SuccessResponse } from 'types/api';
import type { Widgets } from 'types/api/dashboard/getAll';
import type { MetricRangePayloadProps } from 'types/api/metrics/getQueryRange';

import type { timePreferance } from './RightContainer/timeItems';

export interface NewWidgetProps {
	selectedGraph: PANEL_TYPES;
	yAxisUnit: Widgets['yAxisUnit'];
	fillSpans: Widgets['fillSpans'];
}

export interface WidgetGraphProps {
	selectedLogFields: Widgets['selectedLogFields'];
	setSelectedLogFields?: Dispatch<SetStateAction<Widgets['selectedLogFields']>>;
	selectedTracesFields: Widgets['selectedTracesFields'];
	setSelectedTracesFields?: Dispatch<
		SetStateAction<Widgets['selectedTracesFields']>
	>;
	selectedWidget: Widgets;
	selectedGraph: PANEL_TYPES;
	selectedTime: timePreferance;
	requestData: GetQueryResultsProps;
	setRequestData: Dispatch<SetStateAction<GetQueryResultsProps>>;
	isLoadingPanelData: boolean;
}

export type WidgetGraphContainerProps = {
	queryResponse: UseQueryResult<
		SuccessResponse<MetricRangePayloadProps, unknown>,
		Error
	>;
	setRequestData: Dispatch<SetStateAction<GetQueryResultsProps>>;
	selectedGraph: PANEL_TYPES;
	selectedWidget: Widgets;
	isLoadingPanelData: boolean;
};
