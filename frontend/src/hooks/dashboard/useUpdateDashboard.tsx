import update from 'api/dashboard/update';
import dayjs from 'dayjs';
import { useDashboard } from 'providers/Dashboard/Dashboard';
import { type UseMutationResult, useMutation } from 'react-query';
import type { ErrorResponse, SuccessResponse } from 'types/api';
import type { Dashboard } from 'types/api/dashboard/getAll';
import type { Props } from 'types/api/dashboard/update';

export const useUpdateDashboard = (): UseUpdateDashboard => {
	const { updatedTimeRef } = useDashboard();
	return useMutation(update, {
		onSuccess: (data) => {
			if (data.payload) {
				updatedTimeRef.current = dayjs(data.payload.updated_at);
			}
		},
	});
};

type UseUpdateDashboard = UseMutationResult<
	SuccessResponse<Dashboard> | ErrorResponse,
	unknown,
	Props,
	unknown
>;
