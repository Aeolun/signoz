import type { IField } from 'types/api/logs/fields';
import type { BaseAutocompleteData } from 'types/api/queryBuilder/queryAutocompleteResponse';

export const convertKeysToColumnFields = (
	keys: BaseAutocompleteData[],
): IField[] =>
	keys.map((item) => ({
		dataType: item.dataType as string,
		name: item.key,
		type: item.type as string,
	}));
