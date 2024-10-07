import axios from 'api';
import type { ApiResponse } from 'types/api';
import type { FeatureFlagProps } from 'types/api/features/getFeaturesFlags';

const getFeaturesFlags = (): Promise<FeatureFlagProps[]> =>
	axios
		.get<ApiResponse<FeatureFlagProps[]>>('/featureFlags')
		.then((response) => response.data.data);

export default getFeaturesFlags;
