import type { TagFilter } from '../queryBuilder/queryBuilderData';
import type { AlertDef } from './def';

export interface GetTimelineTableRequestProps {
	id: AlertDef['id'];
	start: number;
	end: number;
	offset: number;
	limit: number;
	order: string;
	filters?: TagFilter;
	state?: string;
}
