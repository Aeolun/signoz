import {
	Button,
	type ButtonProps,
	Col,
	type ColProps,
	Divider,
	type DividerProps,
	Row,
	type RowProps,
	Space,
	type SpaceProps,
	type TabsProps,
	Typography,
} from 'antd';
import type { TextProps } from 'antd/lib/typography/Text';
import type { TitleProps } from 'antd/lib/typography/Title';
import type { HTMLAttributes } from 'react';
import styled, { type FlattenSimpleInterpolation } from 'styled-components';

import type { IStyledClass } from './types';

const styledClass = (props: IStyledClass): FlattenSimpleInterpolation | null =>
	props.styledclass || null;

type TStyledCol = ColProps & IStyledClass;
const StyledCol = styled(Col)<TStyledCol>`
	${styledClass}
`;

type TStyledRow = RowProps & IStyledClass;
const StyledRow = styled(Row)<TStyledRow>`
	${styledClass}
`;

type TStyledDivider = DividerProps & IStyledClass;
const StyledDivider = styled(Divider)<TStyledDivider>`
	${styledClass}
`;

type TStyledSpace = SpaceProps & IStyledClass;
const StyledSpace = styled(Space)<TStyledSpace>`
	${styledClass}
`;

type TStyledTabs = TabsProps & IStyledClass;
const StyledTabs = styled(Divider)<TStyledTabs>`
	${styledClass}
`;

type TStyledButton = ButtonProps & IStyledClass;
const StyledButton = styled(Button)<TStyledButton>`
	${styledClass}
`;

const { Text } = Typography;
type TStyledTypographyText = TextProps & IStyledClass;
const StyledTypographyText = styled(Text)<TStyledTypographyText>`
	${styledClass}
`;

const { Title } = Typography;
type TStyledTypographyTitle = TitleProps & IStyledClass;
const StyledTypographyTitle = styled(Title)<TStyledTypographyTitle>`
	${styledClass}
`;

type TStyledDiv = HTMLAttributes<HTMLDivElement> & IStyledClass;
const StyledDiv = styled.div<TStyledDiv>`
	${styledClass}
`;

const StyledTypography = {
	Text: StyledTypographyText,
	Title: StyledTypographyTitle,
};
export {
	StyledButton,
	StyledCol,
	StyledDiv,
	StyledDivider,
	StyledRow,
	StyledSpace,
	StyledTabs,
	StyledTypography,
};
