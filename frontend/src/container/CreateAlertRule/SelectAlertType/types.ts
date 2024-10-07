import type { AlertTypes } from 'types/api/alerts/alertTypes';

export interface OptionType {
	title: string;
	selection: AlertTypes;
	description: string;
}
