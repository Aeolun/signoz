import axios from 'api';
import type { DeleteViewPayloadProps } from 'types/api/saveViews/types';

export const deleteView = (uuid: string): Promise<DeleteViewPayloadProps> =>
	axios.delete(`/explorer/views/${uuid}`);
