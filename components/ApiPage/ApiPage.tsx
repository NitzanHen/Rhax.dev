import classes from './api-page.module.scss';
import api, { Module } from '../../rhax.api';

export interface ApiPageProps {
	module: Module
}

export const ApiPage: React.VFC<ApiPageProps> = ({ module }) => {
	const { name, source, variants } = module;

	const sourceUrl = `https://github.com/NitzanHen/rhax/blob/main/src/${source}`;

	return (
		<div>
			<h1>{name}</h1>
			{variants.map(({ signature, comment }) => (
				<article key={signature}>
					<pre><code>{signature}</code></pre>
					<p>{comment}</p>
					<p>Source: <a href={sourceUrl} target='_blank' rel="noreferrer">{source}</a></p>
				</article>
			))}
		</div>
	);
};
