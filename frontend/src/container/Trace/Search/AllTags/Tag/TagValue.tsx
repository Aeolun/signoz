import { Select } from 'antd';
import type { BaseOptionType } from 'antd/es/select';
import getTagValue from 'api/trace/getTagValue';
import {
	type Dispatch,
	type SetStateAction,
	memo,
	useCallback,
	useMemo,
	useState,
} from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import type { AppState } from 'store/reducers';
import type { GlobalReducer } from 'types/reducer/globalTime';
import type { TraceReducer } from 'types/reducer/trace';

import { SelectComponent } from './styles';
import {
	type TagValueTypes,
	disableTagValue,
	extractTagKey,
	extractTagType,
	getInitialLocalValue,
	getTagValueOptions,
	onTagValueChange,
	selectOptions,
	separateTagValues,
} from './utils';

function TagValue(props: TagValueProps): JSX.Element {
	const { tag, setLocalSelectedTags, index, tagKey } = props;
	const {
		Key: selectedKey,
		Operator: selectedOperator,
		StringValues: selectedStringValues,
		NumberValues: selectedNumberValues,
		BoolValues: selectedBoolValues,
	} = tag;

	const traces = useSelector<AppState, TraceReducer>((state) => state.traces);

	const [localTagValue, setLocalTagValue] = useState<TagValueTypes[]>(
		getInitialLocalValue(
			selectedNumberValues,
			selectedBoolValues,
			selectedStringValues,
		),
	);

	const globalReducer = useSelector<AppState, GlobalReducer>(
		(state) => state.globalTime,
	);

	const tagType = useMemo(() => extractTagType(tagKey), [tagKey]);

	const { isLoading, data } = useQuery(
		[
			'tagKey',
			globalReducer.minTime,
			globalReducer.maxTime,
			tagKey,
			tagType,
			traces.spanKind,
		],
		{
			queryFn: () =>
				getTagValue({
					end: globalReducer.maxTime,
					start: globalReducer.minTime,
					tagKey: {
						Key: extractTagKey(tagKey),
						Type: tagType,
					},
					spanKind: traces.spanKind,
				}),
		},
	);

	const tagValueDisabled = useMemo(
		() =>
			disableTagValue(
				selectedOperator,
				setLocalTagValue,
				selectedKey,
				setLocalSelectedTags,
				index,
			),
		[index, selectedKey, selectedOperator, setLocalSelectedTags],
	);

	const onChangeHandler = useCallback(
		(value: unknown) => {
			const updatedValues = onTagValueChange(value);
			setLocalTagValue(updatedValues);
			const { boolValues, numberValues, stringValues } = separateTagValues(
				updatedValues,
				selectedKey,
			);

			setLocalSelectedTags((tags) => [
				...tags.slice(0, index),
				{
					...tags[index],
					BoolValues: boolValues,
					NumberValues: numberValues,
					StringValues: stringValues,
				},
				...tags.slice(index + 1),
			]);
		},
		[index, setLocalSelectedTags, selectedKey],
	);

	const getFilterOptions = useCallback(
		(inputValue: string, option?: BaseOptionType): boolean => {
			if (typeof option?.label === 'string') {
				return option?.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
			}
			return false;
		},
		[],
	);

	return (
		<SelectComponent
			loading={isLoading}
			options={getTagValueOptions(data?.payload, tagType)}
			mode="tags"
			allowClear
			showSearch
			filterOption={getFilterOptions}
			disabled={isLoading || tagValueDisabled}
			value={localTagValue}
			onChange={onChangeHandler}
		>
			{selectOptions(data?.payload, tagType)?.map((suggestion) => (
				<Select.Option key={suggestion.toString()} value={suggestion}>
					{suggestion}
				</Select.Option>
			))}
		</SelectComponent>
	);
}

interface TagValueProps {
	index: number;
	tag: FlatArray<TraceReducer['selectedTags'], 1>;
	setLocalSelectedTags: Dispatch<SetStateAction<TraceReducer['selectedTags']>>;
	tagKey: string;
}

export default memo(TagValue);
