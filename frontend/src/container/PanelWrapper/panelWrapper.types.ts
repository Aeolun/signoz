import type { PANEL_TYPES } from 'constants/queryBuilder';
import type { WidgetGraphComponentProps } from 'container/GridCardLayout/GridCard/types';
import type { RowData } from 'lib/query/createTableColumnsFromQuery';
import type { OnClickPluginOpts } from 'lib/uPlotLib/plugins/onClickPlugin';
import type { Dispatch, SetStateAction } from 'react';
import type { UseQueryResult } from 'react-query';
import type { SuccessResponse } from 'types/api';
import type { Widgets } from 'types/api/dashboard/getAll';
import type { MetricRangePayloadProps } from 'types/api/metrics/getQueryRange';

export type PanelWrapperProps = {
	queryResponse: UseQueryResult<
		SuccessResponse<MetricRangePayloadProps, unknown>,
		Error
	>;
	widget: Widgets;
	setRequestData?: WidgetGraphComponentProps['setRequestData'];
	isFullViewMode?: boolean;
	onToggleModelHandler?: () => void;
	graphVisibility?: boolean[];
	setGraphVisibility?: Dispatch<SetStateAction<boolean[]>>;
	onClickHandler?: OnClickPluginOpts['onClick'];
	onDragSelect: (start: number, end: number) => void;
	selectedGraph?: PANEL_TYPES;
	tableProcessedDataRef?: React.MutableRefObject<RowData[]>;
	searchTerm?: string;
	customTooltipElement?: HTMLDivElement;
};

export type TooltipData = {
	label: string;
	key: string;
	value: string;
	color: string;
};
