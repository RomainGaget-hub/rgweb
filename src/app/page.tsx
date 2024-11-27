import BlogPreview from '../components/BlogPreview';
import HomeIntro from '@/components/HomeIntro';

const Home = () => {
	return (
		<section>
			<div>
				<HomeIntro />
				<BlogPreview />
			</div>
		</section>
	);
};

export default Home;
