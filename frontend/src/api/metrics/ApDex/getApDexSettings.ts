import axios from 'api';
import type { AxiosResponse } from 'axios';
import type { ApDexPayloadAndSettingsProps } from 'types/api/metrics/getApDex';

export const getApDexSettings = (
	servicename: string,
): Promise<AxiosResponse<ApDexPayloadAndSettingsProps[]>> =>
	axios.get(`/settings/apdex?services=${servicename}`);
