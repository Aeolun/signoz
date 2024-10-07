import { PANEL_TYPES } from 'constants/queryBuilder';
import type { PanelTypeAndGraphManagerVisibilityProps } from 'container/GridCardLayout/GridCard/FullView/types';
import type { PanelTypeKeys } from 'types/common/queryBuilder';

export const useChartMutable = ({
	panelType,
	panelTypeAndGraphManagerVisibility,
}: UseChartMutableProps): boolean => {
	const panelKeys: PanelTypeKeys[] = [].slice.call(Object.keys(PANEL_TYPES));
	const graphType = panelKeys.find(
		(key: PanelTypeKeys) => PANEL_TYPES[key] === panelType,
	);
	if (!graphType) {
		return false;
	}
	return panelTypeAndGraphManagerVisibility[graphType];
};

interface UseChartMutableProps {
	panelType: string;
	panelTypeAndGraphManagerVisibility: PanelTypeAndGraphManagerVisibilityProps;
}
