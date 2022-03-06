import clsx from 'clsx';
import Link from 'next/link';
import { Button } from '../Button';
import classes from './landing-conclusion.module.scss';

export interface LandingConclusionProps { }

export const LandingConclusion: React.VFC<LandingConclusionProps> = () => {

	return (
		<section className={classes.root}>
			<div className={classes.content}>
				<h2>Ready to get started?</h2>
				<div className={classes.actions}>
					<Link href='/docs'>
						<a className={clsx('button-base', classes.action)}>Getting Started</a>
					</Link>
					<Link href='/docs'>
						<a className={clsx('button-base', classes.action)}>Documentation</a>
					</Link>
					<a href='https://github.com/NitzanHen/rhax' target='_blank' rel="noreferrer" className={clsx('button-base', classes.action)}>GitHub repository</a>
				</div>
			</div>
		</section>
	);
};
