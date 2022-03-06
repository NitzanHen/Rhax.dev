import Link from 'next/link';
import { Button } from '../Button';
import classes from './landing-view.module.scss';

export interface LandingViewProps { }

export const LandingView: React.VFC<LandingViewProps> = () => {

	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<section>
					<h1>The <span className={classes.magical}>✨magical✨</span> Functional Progamming library</h1>
					<p>For JavaScript</p>
					<div className={classes.actions}>
						<Link href='/docs/getting-started'><a className='button-base'>Getting Started</a></Link>
						<Link href='/docs'><a className='button-base'>Documentation</a></Link>
						
						
					</div>
				</section>
				<aside className={classes.shadow}></aside>
			</div>
		</div>
	);
};
