import { getApDexSettings } from 'api/metrics/ApDex/getApDexSettings';
import type { AxiosError, AxiosResponse } from 'axios';
import { type UseQueryResult, useQuery } from 'react-query';
import type { ApDexPayloadAndSettingsProps } from 'types/api/metrics/getApDex';

export const useGetApDexSettings = (
	servicename: string,
): UseQueryResult<AxiosResponse<ApDexPayloadAndSettingsProps[]>, AxiosError> =>
	useQuery<AxiosResponse<ApDexPayloadAndSettingsProps[]>, AxiosError>({
		queryKey: [{ servicename }],
		queryFn: async () => getApDexSettings(servicename),
	});
