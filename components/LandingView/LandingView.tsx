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
						<Button>Getting Started</Button>
						<Button>Documentation</Button>
					</div>
				</section>
				<aside className={classes.shadow}></aside>
			</div>
		</div>
	);
};
