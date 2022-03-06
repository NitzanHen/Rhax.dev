import clsx from 'clsx';
import classes from './button.module.scss';

export type ButtonProps = JSX.IntrinsicElements['button'];

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
	
	return (
		<button className={clsx('button-base', className)} {...props}/>
	);
};
