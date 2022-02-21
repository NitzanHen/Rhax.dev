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
						<p>Rhax is a JavaScript utility library whose purpose is to make your day-to-day code <em>fantastic</em>. </p>
						<p>x</p>
						<p>By the way, &quot;Rhax&quot; (ῥάξ) is the ancient Greek word for grape 🍇</p>
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
						<p>We believe JavaScript code is best written in a way that <em>emphasizes your logic and intent</em>. </p>
						<p>Therefore, Rhax&apos;s utilities are designed to be <strong>declarative</strong>, <strong>idiomatic</strong> and <strong>concise</strong>. They&apos;re aimed to minimize the amount of gray code in your codebase, replacing it with easy-to-read, elegant operations that focus on your logic.</p>
					</article>
				</div>
				<div className={classes.feature}>
					<article>
						<h2>Functional Programming made practical</h2>
						<p>Rhax takes a non-traditional approach to functional programming: <em><strong>simplicity</strong></em>.</p>
						<p>It&apos;s designed to utilize the best of FP - <strong>purity</strong>, <strong>immutability</strong> and <strong>declarative code</strong> - while keeping the paradigm&apos;s infamous learning curve out. </p>
						<p>This means Rhax has <em>no unnecessarily complex concepts</em>, <em>no ocean of jargon</em>, and <em>no surrendering your codebase to the paradigm</em>.</p>
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
						<p>Rhax was designed to be intuitive, and is simple to introduce into any codebase.</p>
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
		</section >
	);
};
