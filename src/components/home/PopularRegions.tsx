import { Container, Grid, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { HouseCard } from '../cards/Card';

const PopularRegion = () => {
	const [activeFilter, setActiveFilter] = useState<string>('All');
	useEffect(() => {}, [activeFilter]);

	return (
		<div
			style={{
				background: 'gray',
				paddingTop: '70px',
				paddingBottom: '70px',
				// background: '#fff',
				// padding: '20px 6px',
			}}>
			<Container style={{}} size={'xl'}>
				<Title sx={{ color: '#000', margin: '0px' }} size={'h3'} order={1}>
					Popular Region
				</Title>
				<motion.div
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					initial={{ opacity: 0 }}
					viewport={{ once: false }}>
					<Grid
						sx={{ margin: '0px', marginTop: '20px', gap: '4px' }}
						justify={'space-evenly'}>
						{[1, 2, 3, 4].map((item, key) => (
							<HouseCard key={key} />
						))}
					</Grid>
				</motion.div>
			</Container>
		</div>
	);
};

export default PopularRegion;
