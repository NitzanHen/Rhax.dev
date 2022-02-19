import classes from './footer.module.scss';

export interface FooterProps {}

export const Footer: React.VFC<FooterProps> = () => {
	
	return (
		<footer className={classes.root}>
			nice footer
		</footer>
	);
};
