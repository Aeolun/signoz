import { useContext } from 'react';

import { ResourceContext } from './context';
import type { IResourceAttributeProps } from './types';

const useResourceAttribute = (): IResourceAttributeProps =>
	useContext(ResourceContext);

export default useResourceAttribute;
