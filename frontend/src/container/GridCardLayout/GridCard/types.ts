import type { ToggleGraphProps } from 'components/Graph/types';
import type { GetQueryResultsProps } from 'lib/dashboard/getQueryResults';
import type { OnClickPluginOpts } from 'lib/uPlotLib/plugins/onClickPlugin';
import type {
	Dispatch,
	MutableRefObject,
	ReactNode,
	SetStateAction,
} from 'react';
import type { UseQueryResult } from 'react-query';
import type { SuccessResponse } from 'types/api';
import type { Dashboard, Widgets } from 'types/api/dashboard/getAll';
import type { MetricRangePayloadProps } from 'types/api/metrics/getQueryRange';
import type uPlot from 'uplot';

import type { MenuItemKeys } from '../WidgetHeader/contants';
import type { LegendEntryProps } from './FullView/types';

export interface GraphVisibilityLegendEntryProps {
	graphVisibilityStates: boolean[];
	legendEntry: LegendEntryProps[];
}

export interface WidgetGraphComponentProps {
	widget: Widgets;
	queryResponse: UseQueryResult<
		SuccessResponse<MetricRangePayloadProps, unknown>,
		Error
	>;
	errorMessage: string | undefined;
	version?: string;
	threshold?: ReactNode;
	headerMenuList: MenuItemKeys[];
	isWarning: boolean;
	isFetchingResponse: boolean;
	setRequestData?: Dispatch<SetStateAction<GetQueryResultsProps>>;
	onClickHandler?: OnClickPluginOpts['onClick'];
	onDragSelect: (start: number, end: number) => void;
	customTooltipElement?: HTMLDivElement;
}

export interface GridCardGraphProps {
	widget: Widgets;
	threshold?: ReactNode;
	headerMenuList?: WidgetGraphComponentProps['headerMenuList'];
	onClickHandler?: OnClickPluginOpts['onClick'];
	isQueryEnabled: boolean;
	variables?: Dashboard['data']['variables'];
	version?: string;
	onDragSelect: (start: number, end: number) => void;
	customTooltipElement?: HTMLDivElement;
	dataAvailable?: (isDataAvailable: boolean) => void;
}

export interface GetGraphVisibilityStateOnLegendClickProps {
	options: uPlot.Options;
	isExpandedName: boolean;
	name: string;
}

export interface ToggleGraphsVisibilityInChartProps {
	graphsVisibilityStates: GraphVisibilityLegendEntryProps['graphVisibilityStates'];
	lineChartRef: MutableRefObject<ToggleGraphProps | undefined>;
}
