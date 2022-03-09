import { groupBy } from 'rhax';
import api from './rhax.api.json';

const apiRecord = groupBy(api, e => e.source);

export interface RhaxExport {
	name: string;
	source: string;
	variants: {
		signature: string;
		comment?: string,
	}[]
}

export default apiRecord as Record<string, RhaxExport[]>;