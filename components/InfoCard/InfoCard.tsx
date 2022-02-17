import clsx from 'clsx';
import React from 'react';
import { BaseComponentProps } from '../../utils/BaseComponentProps';
import classes from './info-card.module.scss';

export interface InfoCardProps extends BaseComponentProps {
	header: string;
	content: string
}

export const InfoCard: React.VFC<InfoCardProps> = ({ className, style, header, content }) => {

	return (
		<div className={clsx(classes.card, className)} style={style}>
			<p className={classes.header}>{header}</p>
			<hr />
			<p className={classes.content}>{content}</p>
		</div>
	);
};
