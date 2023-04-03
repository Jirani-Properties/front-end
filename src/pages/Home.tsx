import { useMediaQuery } from '@mantine/hooks';
import Banner from '../components/home/sections/Banner';
import Recommendation from '../components/home/sections/Recommendation';
import Services from '../components/home/sections/Services';

const Home = () => {
	const mediaQuery = useMediaQuery('(max-width: 48em)');

	return (
		<div
			style={
				{
					// scrollSnapType: 'y mandatory',
					// overflowY: 'auto',
					// height: '89.5vh',
				}
			}>
			<Banner {...{ mediaQuery }} />
			<Services />
			<Recommendation />
		</div>
	);
};
export default Home;
