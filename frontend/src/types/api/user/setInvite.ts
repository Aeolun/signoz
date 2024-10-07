import type { User } from 'types/reducer/app';
import type { ROLES } from 'types/roles';

export interface Props {
	name: User['name'];
	email: User['email'];
	role: ROLES;
	frontendBaseUrl: string;
}

export interface PayloadProps {
	data: string;
}
