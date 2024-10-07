import type { User } from 'types/reducer/app';
import type { ROLES } from 'types/roles';

export interface Props {
	userId: User['userId'];
	token?: string;
}

export interface PayloadProps {
	group_name: ROLES;
	user_id: string;
}
