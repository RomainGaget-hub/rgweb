import { JSX, ComponentProps } from 'react';
import { highlight } from 'sugar-high';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';

interface CodeProps extends ComponentProps<'code'> {
	children: string;
}

function Code({ children, ...props }: CodeProps) {
	const codeHTML = highlight(children);
	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
	code: Code,
};

export default function MDXContent(
	props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	);
}
