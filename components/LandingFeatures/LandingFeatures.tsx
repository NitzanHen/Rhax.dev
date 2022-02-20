import { CodeBlock } from '../CodeBlock';
import classes from './landing-features.module.scss';

export interface LandingFeaturesProps { }

const code = `// With Rhax, this is valid code!
pipe(transactions)
  (groupBy(([, date]) => date.getMonth()))
  (map.object(
    map(([amount]) => amount))
  )
  (map.object(monthTotal))
  (values)
  (sum)
  (alert)
  .go();
`;

export const LandingFeatures: React.VFC<LandingFeaturesProps> = () => {

	return (
		<section className={classes.root}>
			<div className={classes.content}>
				<div className={classes.feature}>
					<article>
						<h2>What’s Rhax?</h2>
						<p>Rhax is very nice library yes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis nulla massa, id elementum sem suscipit dignissim. Etiam sodales nisl id libero scelerisque, vel congue lorem porta. Donec id fringilla enim. </p>
						<p>Curabitur aliquam, nulla nec vehicula bibendum, felis nisi vulputate orci, ut vulputate mauris augue sed risus. Proin blandit volutpat sem id rhoncus. Fusce ut velit et mauris dignissim bibendum. Nunc ut dignissim magna. Nullam at tempor urna. </p>
					</article>
					<aside>
						<CodeBlock>{code}</CodeBlock>
					</aside>
				</div>
				<div className={classes.feature}>
					<aside>
						<CodeBlock>{code}</CodeBlock>
					</aside>
					<article>
						<h2>Declarative, Idiomatic &amp; Consice</h2>
						<p>Phasellus id urna dapibus nisi lobortis vestibulum. Nulla ut maximus felis. Proin ut hendrerit elit. Fusce laoreet sagittis tellus, a tincidunt urna vulputate at. Phasellus eleifend fringilla felis, eu vestibulum risus pellentesque a. Sed magna dui, varius nec enim a, tincidunt malesuada ante. Rhax adopts FP for better code.</p>
						<p>Integer tincidunt at leo quis iaculis. Sed lorem sem, venenatis egestas blandit non, varius sit amet lectus. Suspendisse lacus ex, tempor vel aliquam vitae, porta id purus. Nam sed pharetra quam, eget blandit dui. Fusce pretium est eu sem porttitor, ac consectetur nunc ultricies. looks like magic</p>
					</article>
				</div>
				<div className={classes.feature}>
					<article>
						<h2>Functional Programming made practical</h2>
						<p>Rhax is very nice library yes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis nulla massa, id elementum sem suscipit dignissim. Etiam sodales nisl id libero scelerisque, vel congue lorem porta. Donec id fringilla enim. </p>
						<p>Integer tincidunt at leo quis iaculis. Sed lorem sem, venenatis egestas blandit non, varius sit amet lectus. Suspendisse lacus ex, tempor vel aliquam vitae, porta id purus. Nam sed pharetra quam, eget blandit dui. Fusce pretium est eu sem porttitor, ac consectetur nunc ultricies. looks like magic</p>
					</article>
					<aside>
						<CodeBlock>{code}</CodeBlock>
					</aside>
				</div>
				<div className={classes.feature}>
					<aside>
						<CodeBlock>{code}</CodeBlock>
					</aside>
					<article>
						<h2>For TypeScript users, by TypeScript users</h2>
						<p>Rhax is very nice library yes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis nulla massa, id elementum sem suscipit dignissim. Etiam sodales nisl id libero scelerisque, vel congue lorem porta. Donec id fringilla enim. </p>
						<p>Integer tincidunt at leo quis iaculis. Sed lorem sem, venenatis egestas blandit non, varius sit amet lectus. Suspendisse lacus ex, tempor vel aliquam vitae, porta id purus. Nam sed pharetra quam, eget blandit dui. Fusce pretium est eu sem porttitor, ac consectetur nunc ultricies. looks like magic</p>
					</article>
				</div>

				<div className={classes.more_features}>
					<article>
						<h2>Lightweight</h2>
						<p>A small bundle size and tree-shaking make Rhax’s footprint extremely light.</p>
					</article>
					<article>
						<h2>Easy to pick up</h2>
						<p>Rhax was designed to be intuitive, and avoids unecessary complexity.</p>
					</article>
					<article>
						<h2>Modern</h2>
						<p>Rhax is written and built using modern JavaScript syntax and tools.</p>
					</article>
					<article>
						<h2>Open source</h2>
						<p>Now and forever.</p>
					</article>
				</div>
			</div>
		</section>
	);
};
