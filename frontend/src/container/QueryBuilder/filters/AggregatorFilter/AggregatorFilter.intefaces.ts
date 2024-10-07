import type { AutoCompleteProps } from 'antd';
import type { BaseAutocompleteData } from 'types/api/queryBuilder/queryAutocompleteResponse';
import type { IBuilderQuery } from 'types/api/queryBuilder/queryBuilderData';

export type AgregatorFilterProps = Pick<AutoCompleteProps, 'disabled'> & {
	query: IBuilderQuery;
	onChange: (value: BaseAutocompleteData) => void;
};
