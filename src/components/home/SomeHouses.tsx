import { Container, Grid, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { categoryInterface, houseInterface, tagsInterface } from '../../types';
import { HouseCard } from '../cards/Card';

const SomeHouse = ({
	houseData,
}: {
	houseData: houseInterface<categoryInterface, tagsInterface, string, string>[];
}) => {
	const [activeFilter, setActiveFilter] = useState<string>('All');
	useEffect(() => {}, [activeFilter]);

	return (
		<Container
			size={'xl'}
			sx={{ marginTop: '80px', background: '#fff', padding: '20px 10px' }}>
			<div
				style={{
					overflowX: 'auto',
					padding: '6px 20px',
					width: '100%',
					display: 'flex',
					gap: '10px',
				}}></div>
			<Grid sx={{ margin: '0px', marginTop: '20px' }} justify={'flex-start'}>
				{houseData.map((item, key) => (
					<HouseCard key={key} {...{ ...item, onClick: () => {} }} />
				))}
			</Grid>

			<div
				style={{
					justifyContent: 'center',
					marginTop: '14px',
					display: 'flex',
				}}>
				<Text
					sx={{
						boxShadow: '1px 1px 3px #000',
						borderRadius: '20px',
						background: '#fff',
						padding: '6px 16px',
						border: 'none',
						color: '#000',
					}}
					component={'button'}>
					View More
				</Text>
			</div>
		</Container>
	);
};

export default SomeHouse;
