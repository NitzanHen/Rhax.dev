import React from 'react';
import { InfoCard } from '../InfoCard';
import classes from './landing-info-section.module.scss';

export interface LandingInfoSectionProps { }

const infoCards = [
	{ header: "What's Rhax?", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget mi porta, sagittis neque non, gravida mi. Donec quis venenatis sapien. Cras pharetra tincidunt sem, eget tincidunt sem maximus malesuada. Etiam faucibus sodales porttitor. Vestibulum sagittis erat eget tristique pellentesque.' },
	{ header: 'How?', content: 'Aenean nisl ipsum, accumsan ac sem in, semper mollis lorem. Cras a mi tellus. Aliquam ornare, arcu eget ullamcorper mattis, magna nibh rhoncus ligula, maximus vestibulum neque diam at ipsum. Integer lobortis vitae nibh molestie viverra. Pellentesque suscipit ligula ac ullamcorper molestie.' },
	{ header: 'Why FP?', content: 'Ut ac nisl pulvinar, tempus orci ut, laoreet massa. Aenean tristique massa ac ex rhoncus lobortis. Sed faucibus pellentesque arcu, fringilla viverra tellus lobortis pulvinar. Nunc consequat dictum elementum. Nullam ut enim nibh. Maecenas eu neque eu dui mattis ornare. Pellentesque sit amet cursus purus. Nam in nunc sit amet elit bibendum hendrerit.' },
	{ header: 'Ready to get started?', content: 'Pellentesque dictum ante felis, eu pellentesque nibh volutpat sit amet. Curabitur vel velit malesuada, vestibulum eros eu, ullamcorper dolor. Proin ac arcu justo. Aenean diam quam, condimentum non libero tempus, posuere rhoncus nisl. Etiam egestas, velit nec pharetra placerat, magna orci pharetra metus, id pharetra nunc ipsum at est.' },
]

export const LandingInfoSection: React.VFC<LandingInfoSectionProps> = () => {

	return (
		<section className={classes.root}>
			<div className={classes.cards}>
			{infoCards.map(({ header, content }, i) => (
				<InfoCard header={header} content={content} key={header} style={{ transform: `translateY(${i * 75}px)` }}/>
			))}
			</div>

		</section>
	);
};
