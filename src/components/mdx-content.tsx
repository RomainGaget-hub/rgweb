import {
	ComponentProps,
	ReactNode,
	DetailedHTMLProps,
	HTMLAttributes,
} from 'react';
import { highlight } from 'sugar-high';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import type { MDXComponents } from 'mdx/types';

interface CodeProps extends ComponentProps<'code'> {
	children: ReactNode;
}

function Code({ children, ...props }: CodeProps) {
	const codeHTML = highlight(children?.toString() || '');
	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components: MDXComponents = {
	code: Code as React.ComponentType<
		DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
	>,
};

export default function MDXContent(props: MDXRemoteProps) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	);
}
