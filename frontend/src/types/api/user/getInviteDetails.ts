import type { User } from 'types/reducer/app';
import type { ROLES } from 'types/roles';

import type { Organization } from './getOrganization';
import type { PayloadProps as LoginPrecheckPayloadProps } from './loginPrecheck';

export interface Props {
	inviteId: string;
}

export interface PayloadProps {
	createdAt: number;
	email: User['email'];
	name: User['name'];
	role: ROLES;
	token: string;
	organization: Organization['name'];
	precheck?: LoginPrecheckPayloadProps;
}
