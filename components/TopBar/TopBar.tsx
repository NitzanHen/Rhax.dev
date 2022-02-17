import React from 'react';
import classes from './top-bar.module.scss';

export interface TopBarProps {}

export const TopBar: React.VFC<TopBarProps> = () => {
	
	return (
		<div className={classes.root}>
			<p className={classes.name}>Rhax</p>
		</div>
	);
};
