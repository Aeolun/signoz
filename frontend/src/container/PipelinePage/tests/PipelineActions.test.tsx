import { render } from '@testing-library/react';
import i18n from 'ReactI18';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from 'store';

import PipelineActions from '../PipelineListsView/TableComponents/PipelineActions';
import { pipelineMockData } from '../mocks/pipeline';

jest.mock('uplot', () => {
	const paths = {
		spline: jest.fn(),
		bars: jest.fn(),
	};
	const uplotMock = jest.fn(() => ({
		paths,
	}));
	return {
		paths,
		default: uplotMock,
	};
});

describe('PipelinePage container test', () => {
	it('should render PipelineActions section', () => {
		const { asFragment } = render(
			<MemoryRouter>
				<Provider store={store}>
					<I18nextProvider i18n={i18n}>
						<PipelineActions
							pipeline={pipelineMockData[0]}
							editAction={jest.fn()}
							deleteAction={jest.fn()}
						/>
					</I18nextProvider>
				</Provider>
			</MemoryRouter>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
