import type { TopOperationList } from 'container/MetricsApplication/TopOperationsTable';
import type { Tags } from 'types/reducer/trace';

export interface Props {
	service: string;
	start: number;
	end: number;
	selectedTags: Tags[];
}

export type PayloadProps = TopOperationList[];
