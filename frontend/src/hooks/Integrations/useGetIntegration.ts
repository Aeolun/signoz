import { getIntegration } from 'api/Integrations/getIntegration';
import type { AxiosError, AxiosResponse } from 'axios';
import { type UseQueryResult, useQuery } from 'react-query';
import type {
	GetIntegrationPayloadProps,
	GetIntegrationProps,
} from 'types/api/integrations/types';

export const useGetIntegration = ({
	integrationId,
}: GetIntegrationPayloadProps): UseQueryResult<
	AxiosResponse<GetIntegrationProps>,
	AxiosError
> =>
	useQuery<AxiosResponse<GetIntegrationProps>, AxiosError>({
		queryKey: ['Integration', integrationId],
		queryFn: () => getIntegration({ integrationId }),
	});
