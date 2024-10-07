import type { QueryObserverBaseResult } from 'react-query';
import type { PayloadProps as ConfigPayload } from 'types/api/dynamicConfigs/getDynamicConfigs';
import type { FeatureFlagProps as FeatureFlagPayload } from 'types/api/features/getFeaturesFlags';
import type { PayloadProps as OrgPayload } from 'types/api/user/getOrganization';
import type { PayloadProps as UserPayload } from 'types/api/user/getUser';
import type { UserFlags } from 'types/api/user/setFlags';
import type { ROLES } from 'types/roles';

export interface User {
	accessJwt: string;
	refreshJwt: string;
	userId: string;
	email: UserPayload['email'];
	name: UserPayload['name'];
	profilePictureURL: UserPayload['profilePictureURL'];
}

export default interface AppReducer {
	isLoggedIn: boolean;
	currentVersion: string;
	latestVersion: string;
	isCurrentVersionError: boolean;
	isLatestVersionError: boolean;
	user: null | User;
	isUserFetching: boolean;
	isUserFetchingError: boolean;
	role: ROLES | null;
	org: OrgPayload | null;
	configs: ConfigPayload;
	userFlags: null | UserFlags;
	ee: 'Y' | 'N';
	setupCompleted: boolean;
	featureResponse: {
		data: FeatureFlagPayload[] | null;
		refetch: QueryObserverBaseResult['refetch'];
	};
}
