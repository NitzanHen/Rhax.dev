import classes from './code-block.module.scss';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import { BaseComponentProps } from '../../utils/BaseComponentProps';
import 'highlight.js/styles/base16/edge-dark.css';
import clsx from 'clsx';

hljs.registerLanguage('typescript', typescript);

export interface CodeBlockProps extends BaseComponentProps {
	children: string;
}

export const CodeBlock: React.VFC<CodeBlockProps> = ({ className, style, children }) => {

	return (
		<pre className={clsx(classes.root, className)} style={style}>
			<code ref={el => el && hljs.highlightElement(el)}>
				{children}
			</code>
		</pre>

	);
};
