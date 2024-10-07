import { Typography } from 'antd';
import getUserVersion from 'api/user/getVersion';
import Spinner from 'components/Spinner';
import { useTranslation } from 'react-i18next';
import { useQueries } from 'react-query';
import { useSelector } from 'react-redux';
import type { AppState } from 'store/reducers';
import type AppReducer from 'types/reducer/app';

import SignUpComponent from './SignUp';

function SignUp(): JSX.Element {
	const { t } = useTranslation('common');
	const { isLoggedIn, user } = useSelector<AppState, AppReducer>(
		(state) => state.app,
	);

	const [versionResponse] = useQueries([
		{
			queryFn: getUserVersion,
			queryKey: ['getUserVersion', user?.accessJwt],
			enabled: !isLoggedIn,
		},
	]);

	if (
		versionResponse.status === 'error' ||
		(versionResponse.status === 'success' &&
			versionResponse.data?.statusCode !== 200)
	) {
		return (
			<Typography>
				{versionResponse.data?.error || t('something_went_wrong')}
			</Typography>
		);
	}

	if (versionResponse.status === 'loading' || !versionResponse.data?.payload) {
		return <Spinner tip="Loading..." />;
	}

	const { version } = versionResponse.data.payload;

	return <SignUpComponent version={version} />;
}

export default SignUp;
