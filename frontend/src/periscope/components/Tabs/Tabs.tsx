/* eslint-disable react/jsx-props-no-spreading */
import { Tabs as AntDTabs, type TabsProps } from 'antd';
import type React from 'react';

export interface TabProps {
	label: string | React.ReactElement;
	key: string;
	children: React.ReactElement;
}

export default function Tabs(props: TabsProps): React.ReactNode {
	return <AntDTabs {...props} />;
}
