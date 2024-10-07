import type { StaticLineProps, ToggleGraphProps } from 'components/Graph/types';
import type { UplotProps } from 'components/Uplot/Uplot';
import type { GridTableComponentProps } from 'container/GridTableComponent/types';
import type { GridValueComponentProps } from 'container/GridValueComponent/types';
import type { timePreferance } from 'container/NewWidget/RightContainer/timeItems';
import type { OnClickPluginOpts } from 'lib/uPlotLib/plugins/onClickPlugin';
import type { ForwardedRef } from 'react';
import type { Widgets } from 'types/api/dashboard/getAll';
import type { Query } from 'types/api/queryBuilder/queryBuilderData';
import type { QueryDataV3 } from 'types/api/widgets/getQuery';
import type { DataSource } from 'types/common/queryBuilder';
import type uPlot from 'uplot';

import { PANEL_TYPES } from '../../constants/queryBuilder';

export type GridPanelSwitchProps = {
	panelType: PANEL_TYPES;
	data: uPlot.AlignedData;
	options: uPlot.Options;
	onClickHandler?: OnClickPluginOpts['onClick'];
	name: string;
	yAxisUnit?: string;
	staticLine?: StaticLineProps;
	onDragSelect?: (start: number, end: number) => void;
	panelData: QueryDataV3[];
	query: Query;
	thresholds?: Widgets['thresholds'];
	dataSource?: DataSource;
	selectedLogFields?: Widgets['selectedLogFields'];
	selectedTracesFields?: Widgets['selectedTracesFields'];
	selectedTime?: timePreferance;
};

export type PropsTypePropsMap = {
	[PANEL_TYPES.TIME_SERIES]: UplotProps & {
		ref: ForwardedRef<ToggleGraphProps | undefined>;
	};
	[PANEL_TYPES.VALUE]: GridValueComponentProps;
	[PANEL_TYPES.TABLE]: GridTableComponentProps;
	[PANEL_TYPES.TRACE]: null;
	[PANEL_TYPES.PIE]: null;
	[PANEL_TYPES.LIST]: null;
	[PANEL_TYPES.BAR]: UplotProps & {
		ref: ForwardedRef<ToggleGraphProps | undefined>;
	};
	[PANEL_TYPES.HISTOGRAM]: null;
	[PANEL_TYPES.EMPTY_WIDGET]: null;
};
