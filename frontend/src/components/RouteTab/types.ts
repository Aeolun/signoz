import type { TabsProps } from 'antd';
import type { History } from 'history';

export type TabRoutes = {
	name: React.ReactNode;
	route: string;
	Component: () => JSX.Element;
	key: string;
};

export interface RouteTabProps {
	routes: TabRoutes[];
	activeKey: TabsProps['activeKey'];
	onChangeHandler?: VoidFunction;
	history: History<unknown>;
}
