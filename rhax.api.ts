import api from './rhax.api.json';

export interface Module {
	name: string;
	source: string;
	variants: {
		signature: string;
		comment?: string,
	}[]
}

export default api;