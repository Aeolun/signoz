import type { IAttributeValuesResponse } from '../queryBuilder/getAttributesValues';
import type { IQueryAutocompleteResponse } from '../queryBuilder/queryAutocompleteResponse';

export type TagKeyProps = {
	match?: string;
	metricName: string;
};
export type TagKeysPayloadProps = {
	data: IQueryAutocompleteResponse;
};

export type TagValueProps = {
	tagKey: string;
	metricName: string;
};
export type TagValuesPayloadProps = {
	data: IAttributeValuesResponse;
};
