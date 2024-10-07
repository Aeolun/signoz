import type { User } from 'types/reducer/app';

import type { PayloadProps as Payload } from './getUser';

export type PayloadProps = Payload;

export interface Props {
	userId: User['userId'];
	name: User['name'];
}
