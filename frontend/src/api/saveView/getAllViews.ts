import axios from 'api';
import type { AxiosResponse } from 'axios';
import type { AllViewsProps } from 'types/api/saveViews/types';
import type { DataSource } from 'types/common/queryBuilder';

export const getAllViews = (
	sourcepage: DataSource,
): Promise<AxiosResponse<AllViewsProps>> =>
	axios.get(`/explorer/views?sourcePage=${sourcepage}`);
