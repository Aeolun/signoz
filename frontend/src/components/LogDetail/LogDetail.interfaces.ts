import type { DrawerProps } from 'antd';
import type { AddToQueryHOCProps } from 'components/Logs/AddToQueryHOC';
import type { ActionItemProps } from 'container/LogDetailedView/ActionItem';
import type { IField } from 'types/api/logs/fields';
import type { ILog } from 'types/api/logs/log';
import type { DataTypes } from 'types/api/queryBuilder/queryAutocompleteResponse';

import type { VIEWS } from './constants';

export type LogDetailProps = {
	log: ILog | null;
	selectedTab: VIEWS;
	onGroupByAttribute?: (
		fieldKey: string,
		isJSON?: boolean,
		dataType?: DataTypes,
	) => Promise<void>;
	isListViewPanel?: boolean;
	listViewPanelSelectedFields?: IField[] | null;
} & Pick<AddToQueryHOCProps, 'onAddToQuery'> &
	Partial<Pick<ActionItemProps, 'onClickActionItem'>> &
	Pick<DrawerProps, 'onClose'>;
