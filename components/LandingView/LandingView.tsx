import React from 'react';
import Image from 'next/image';
import classes from './landing-view.module.scss';
import snippet from '../../public/snippet.png';

export interface LandingViewProps { }

export const LandingView: React.VFC<LandingViewProps> = () => {

	return (
		<div className={classes.landing}>
			<section className={classes.pitch}>
				<h1>The <em className={classes.magic}>✨magical✨</em> functional programming library</h1>
				<p>For Typescript (or JavaScript)</p>

				<div className={classes.actions}>
					<button>Get Started</button>
					<button>Documentation</button>
				</div>
			</section>
			<aside>
				<Image className={classes.snippet} src={snippet.src} alt='' width={355} height={148}></Image>
			</aside>
		</div>
	);
};
