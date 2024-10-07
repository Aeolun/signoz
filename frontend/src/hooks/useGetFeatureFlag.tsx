import getFeaturesFlags from 'api/features/getFeatureFlags';
import { REACT_QUERY_KEY } from 'constants/reactQueryKeys';
import { type UseQueryResult, useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import type { AppState } from 'store/reducers';
import type { FeatureFlagProps } from 'types/api/features/getFeaturesFlags';

const useGetFeatureFlag = (
	onSuccessHandler: (routes: FeatureFlagProps[]) => void,
): UseQueryResult<FeatureFlagProps[], unknown> => {
	const userId: string = useSelector<AppState, string>(
		(state) => state.app.user?.userId || '',
	);

	return useQuery<FeatureFlagProps[]>({
		queryFn: getFeaturesFlags,
		queryKey: [REACT_QUERY_KEY.GET_FEATURES_FLAGS, userId],
		onSuccess: onSuccessHandler,
		retryOnMount: false,
	});
};

export default useGetFeatureFlag;
