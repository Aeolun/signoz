import type { ReactNode } from 'react';

import type { MenuItemKeys } from './contants';

export interface MenuItem {
	key: MenuItemKeys;
	icon: ReactNode;
	label: string;
	isVisible: boolean;
	disabled: boolean;
	danger?: boolean;
}

export interface DisplayThresholdProps {
	threshold: ReactNode;
}
