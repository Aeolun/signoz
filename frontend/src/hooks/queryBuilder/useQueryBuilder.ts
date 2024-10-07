import { QueryBuilderContext } from 'providers/QueryBuilder';
import { useContext } from 'react';
import type { QueryBuilderContextType } from 'types/common/queryBuilder';

export function useQueryBuilder(): QueryBuilderContextType {
	return useContext(QueryBuilderContext);
}
