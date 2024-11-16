import BlogPostForm from '../_components/BlogPostForm';
import PageHeader from '../_components/PageHeader';

export default function AdminBlogPostNew() {
	return (
		<>
			<PageHeader>Add Blog Post</PageHeader>
			<BlogPostForm />
		</>
	);
}
