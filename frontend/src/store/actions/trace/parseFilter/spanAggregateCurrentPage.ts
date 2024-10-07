import type { TraceReducer } from 'types/reducer/trace';

import type { ParsedUrl } from '../util';

export const parseQueryIntoCurrent = (
	query: string,
	stateCurrent: TraceReducer['spansAggregate']['currentPage'],
): ParsedUrl<TraceReducer['spansAggregate']['currentPage']> => {
	const url = new URLSearchParams(query);

	let current = 1;

	const selected = url.get('spanAggregateCurrentPage');

	if (selected) {
		try {
			const parsedValue = JSON.parse(decodeURIComponent(selected));
			if (Number.isInteger(parsedValue)) {
				current = Number.parseInt(parsedValue, 10);
			}
		} catch (error) {
			console.log('error while parsing json');
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
