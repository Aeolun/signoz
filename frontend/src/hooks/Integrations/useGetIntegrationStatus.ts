import { getIntegrationStatus } from 'api/Integrations/getIntegrationStatus';
import type { AxiosError, AxiosResponse } from 'axios';
import { type UseQueryResult, useQuery } from 'react-query';
import type {
	GetIntegrationPayloadProps,
	GetIntegrationStatusProps,
} from 'types/api/integrations/types';

export const useGetIntegrationStatus = ({
	integrationId,
}: GetIntegrationPayloadProps): UseQueryResult<
	AxiosResponse<GetIntegrationStatusProps>,
	AxiosError
> =>
	useQuery<AxiosResponse<GetIntegrationStatusProps>, AxiosError>({
		queryKey: ['integration-connection-status', integrationId],
		queryFn: () => getIntegrationStatus({ integrationId }),
		refetchInterval: 5000,
	});
