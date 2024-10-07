import { Button, type ButtonProps } from 'antd';
import styled, {
	css,
	type FlattenSimpleInterpolation,
} from 'styled-components';

export const LiveButtonStyled = styled(Button)<ButtonProps>`
	background-color: #1eb475;

	${({ danger }): FlattenSimpleInterpolation =>
		!danger
			? css`
					&:hover {
						background-color: #1eb475 !important;
					}

					&:active {
						background-color: #1eb475 !important;
					}
			  `
			: css``}
`;
