import type { User } from 'types/reducer/app';
import type { ROLES } from 'types/roles';

export interface PendingInvite {
	createdAt: number;
	email: User['email'];
	name: User['name'];
	role: ROLES;
	token: string;
}

export type PayloadProps = PendingInvite[];
