import type { HavingFilterTagProps } from 'container/QueryBuilder/components/HavingFilterTag/HavingFilterTag.interfaces';
import type {
	Having,
	IBuilderFormula,
} from 'types/api/queryBuilder/queryBuilderData';

export type HavingFilterProps = {
	formula: IBuilderFormula;
	onChange: (having: Having[]) => void;
};

export type HavingTagRenderProps = Omit<HavingFilterTagProps, 'onUpdate'>;
