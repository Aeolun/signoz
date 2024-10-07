import {
	ATTRIBUTE_TYPES,
	type PANEL_TYPES,
	metricsOperatorsByType,
} from 'constants/queryBuilder';
import { metricsEmptyTimeAggregateOperatorOptions } from 'constants/queryBuilderOperators';
import { DataSource } from 'types/common/queryBuilder';
import type { SelectOption } from 'types/common/select';

type GetQueryOperatorsParams = {
	dataSource: DataSource;
	panelType: PANEL_TYPES;
	aggregateAttributeType: ATTRIBUTE_TYPES;
};

export const getMetricsOperatorsByAttributeType = ({
	dataSource,
	aggregateAttributeType,
}: GetQueryOperatorsParams): SelectOption<string, string>[] => {
	if (dataSource === DataSource.METRICS && aggregateAttributeType) {
		if (aggregateAttributeType === ATTRIBUTE_TYPES.SUM) {
			return metricsOperatorsByType.Sum;
		}

		if (aggregateAttributeType === ATTRIBUTE_TYPES.GAUGE) {
			return metricsOperatorsByType.Gauge;
		}
	}

	return metricsEmptyTimeAggregateOperatorOptions;
};
