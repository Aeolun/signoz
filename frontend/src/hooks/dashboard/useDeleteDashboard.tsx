import deleteDashboard from 'api/dashboard/delete';
import { REACT_QUERY_KEY } from 'constants/reactQueryKeys';
import { type UseMutationResult, useMutation } from 'react-query';
import type { PayloadProps } from 'types/api/dashboard/delete';

export const useDeleteDashboard = (
	id: string,
): UseMutationResult<PayloadProps, unknown, void, unknown> =>
	useMutation({
		mutationKey: REACT_QUERY_KEY.DELETE_DASHBOARD,
		mutationFn: () =>
			deleteDashboard({
				uuid: id,
			}),
	});
