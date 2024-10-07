import type { AxiosResponse } from 'axios';
import type { ApDexPayloadAndSettingsProps } from 'types/api/metrics/getApDex';

export interface ApDexSettingsProps {
	servicename: string;
	handlePopOverClose: () => void;
	isLoading?: boolean;
	data?: AxiosResponse<ApDexPayloadAndSettingsProps[]>;
	refetchGetApDexSetting?: () => void;
}
