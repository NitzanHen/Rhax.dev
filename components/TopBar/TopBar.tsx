import classes from './top-bar.module.scss';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

export interface TopBarProps { }

export const TopBar: React.VFC<TopBarProps> = () => {

	return (
		<header className={classes.header}>
			<span>Rhax</span>
			<a href='https://github.com/NitzanHen/rhax' target='_blank' rel="noreferrer">
				<Icon path={mdiGithub} size={1.5} color='var(--color-text-white)' />
			</a>
		</header>
	);
};
