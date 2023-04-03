import { BackgroundImage } from '@mantine/core';
import { motion } from 'framer-motion';
import Banner from '../components/home/Banner';
import Blogs from '../components/home/Blogs';
import FeaturedProperties from '../components/home/FeaturedProperties';
import PopularRegion from '../components/home/PopularRegions';
import SomeHouse from '../components/home/SomeHouses';

const Home = () => {
	const propertyData: any = [];
	const houseData: any = [];
	return (
		<div
			style={{
				overflow: 'hidden',
			}}>
			<motion.div
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
				initial={{ opacity: 0 }}
				viewport={{ once: false }}>
				<BackgroundImage
					src='/assets/images/home1.jpg'
					sx={{
						objectFit: 'cover',
						height: '94vh',
						padding: '0px',
						margin: '0px',
					}}>
					<Banner />
				</BackgroundImage>
			</motion.div>

			<FeaturedProperties {...{ propertyData: propertyData }} />
			<SomeHouse {...{ houseData: houseData }} />

			<PopularRegion />
			<Blogs />
		</div>
	);
};

export default Home;
