import { Fragment } from 'react';
import { RhaxExport } from '../../rhax.api';
import classes from './api-page.module.scss';

export interface ApiPageProps {
	source: string;
	exports: RhaxExport[];
}

export const ApiPage: React.VFC<ApiPageProps> = ({ source, exports }) => {

	const sourceUrl = `https://github.com/NitzanHen/rhax/blob/main/src/${source}`;

	return (
		<div>
			{exports.map(({ name, variants }) => (
				<Fragment key={name}>
					<h1>{name}</h1>
					{variants.map(({ signature, comment }) => (
						<article key={signature}>
							<pre><code>{signature}</code></pre>
							<p>{comment}</p>
							<p>Source: <a href={sourceUrl} target='_blank' rel="noreferrer">{source}</a></p>
						</article>
					))}
				</Fragment>
			))}
		</div>
	);
};
