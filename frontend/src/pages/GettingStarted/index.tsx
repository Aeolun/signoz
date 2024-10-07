import { Typography } from 'antd';

import DocSection from './Section';
import { GetStartedContent } from './renderConfig';

function InstrumentationPage(): JSX.Element {
	return (
		<>
			<Typography>
				Congrats, you have successfully installed SigNoz! Now lets get some data in
				and start deriving insights from them
			</Typography>
			{GetStartedContent().map((section) => (
				<DocSection key={section.heading} sectionData={section} />
			))}
		</>
	);
}

export default InstrumentationPage;
