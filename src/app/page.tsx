import BlogPreview from '../components/BlogPreview';
import HomeIntro from '@/components/HomeHero';

const Home = () => {
	return (
		<section className='mx-auto'>
			<div>
				<HomeIntro />
				<BlogPreview />
			</div>
		</section>
	);
};

export default Home;
