import type { AppAction } from './app';
import type { GlobalTimeAction } from './globalTime';
import type { LogsActions } from './logs';
import type { MetricsActions } from './metrics';
import type { TraceActions } from './trace';

type AppActions =
	| AppAction
	| GlobalTimeAction
	| MetricsActions
	| TraceActions
	| LogsActions;

export default AppActions;
