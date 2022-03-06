import classes from './top-bar.module.scss';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import Link from 'next/link';

export interface TopBarProps { }

export const TopBar: React.VFC<TopBarProps> = () => {

	return (
		<header className={classes.header}>
			<Link href='/'>
				<a>Rhax</a>	
			</Link>
			<a href='https://github.com/NitzanHen/rhax' target='_blank' rel="noreferrer">
				<Icon path={mdiGithub} color='var(--color-text-white)' />
			</a>
		</header>
	);
};
