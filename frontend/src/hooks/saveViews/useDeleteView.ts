import { deleteView } from 'api/saveView/deleteView';
import { type UseMutationResult, useMutation } from 'react-query';
import type { DeleteViewPayloadProps } from 'types/api/saveViews/types';

export const useDeleteView = (
	uuid: string,
): UseMutationResult<DeleteViewPayloadProps, Error, string> =>
	useMutation({
		mutationKey: [uuid],
		mutationFn: () => deleteView(uuid),
	});
