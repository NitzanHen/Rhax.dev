import Image from 'next/image';
import { Button } from '../Button';
import classes from './landing-view.module.scss';

export interface LandingViewProps { }

export const LandingView: React.VFC<LandingViewProps> = () => {

	return (
		<div className={classes.root}>
			<section>
				<h1>The <span className={classes.magical}>✨magical✨</span> Functional Progamming library</h1>
				<p>For JavaScript</p>
				<div className={classes.actions}>
					<Button>Getting Started</Button>
					<Button>Documentation</Button>
				</div>
			</section>
			{/** @todo image */}
			<aside>
				<div className={classes.shadow}></div>
			</aside>
		</div>
	);
};
