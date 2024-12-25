import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // Optional: Choose a syntax highlighting theme

export default function MarkdownRenderer({ content }: { content: string }) {
	return (
		<div className='prose prose-lg prose-invert max-w-none'>
			<ReactMarkdown rehypePlugins={[rehypeHighlight]}>{content}</ReactMarkdown>
		</div>
	);
}
