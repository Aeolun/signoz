import type { TraceReducer } from 'types/reducer/trace';

import type { ParsedUrl } from '../util';

export const parseQueryIntoPageSize = (
	query: string,
	stateCurrent: TraceReducer['spansAggregate']['pageSize'],
): ParsedUrl<TraceReducer['spansAggregate']['pageSize']> => {
	const url = new URLSearchParams(query);

	let current = 1;

	const selected = url.get('spanAggregateCurrentPageSize');

	if (selected) {
		try {
			const parsedValue = JSON.parse(decodeURIComponent(selected));
			if (Number.isInteger(parsedValue)) {
				current = Number.parseInt(parsedValue, 10);
			}
		} catch (error) {
			console.error('error while parsing json');
		}
	}

	if (selected) {
		return {
			currentValue: Number.parseInt(selected, 10),
			urlValue: current,
		};
	}

	return {
		currentValue: stateCurrent,
		urlValue: current,
	};
};
