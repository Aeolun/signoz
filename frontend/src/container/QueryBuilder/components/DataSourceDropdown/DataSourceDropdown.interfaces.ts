import type { SelectProps } from 'antd';
import type { DataSource } from 'types/common/queryBuilder';

export type QueryLabelProps = {
	onChange: (value: DataSource) => void;
	isListViewPanel?: boolean;
} & Omit<SelectProps, 'onChange'>;
