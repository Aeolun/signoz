import type { QueryBuilderProps } from 'container/QueryBuilder/QueryBuilder.interfaces';
import type {
	IBuilderFormula,
	IBuilderQuery,
} from 'types/api/queryBuilder/queryBuilderData';

export type FormulaProps = {
	formula: IBuilderFormula;
	index: number;
	query: IBuilderQuery;
	filterConfigs: Partial<QueryBuilderProps['filterConfigs']>;
	isAdditionalFilterEnable: boolean;
};
