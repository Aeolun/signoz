import axios from 'api';
import type { AxiosResponse } from 'axios';
import type { AllAPIKeyProps } from 'types/api/pat/types';

export const getAllAPIKeys = (): Promise<AxiosResponse<AllAPIKeyProps>> =>
	axios.get('/pats');
