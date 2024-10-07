import type { MouseEventHandler } from 'react';
import type { ILog } from 'types/api/logs/log';

export interface LogsExplorerContextProps {
	log: ILog;
	onClose: MouseEventHandler<HTMLElement>;
}
