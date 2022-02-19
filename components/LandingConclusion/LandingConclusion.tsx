import { Button } from '../Button';
import classes from './landing-conclusion.module.scss';

export interface LandingConclusionProps { }

export const LandingConclusion: React.VFC<LandingConclusionProps> = () => {

	return (
		<section className={classes.root}>
			<div className={classes.content}>
				<h2>Ready to get started?</h2>
				<div className={classes.actions}>
					<Button className={classes.action}>Getting Started</Button>
					<Button className={classes.action}>Documentation</Button>
					<Button className={classes.action}>GitHub repository</Button>
				</div>
			</div>
		</section>
	);
};
