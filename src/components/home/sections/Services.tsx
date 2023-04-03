import { Grid } from '@mantine/core';

import { ServiceCard } from '../../cards/Card';

const Services = () => (
	<div
		style={{
			background: '#00000066',
			justifyContent: 'center',
			paddingBottom: '20px',
			alignItems: 'center',
			minHeight: '89.5vh',
			paddingTop: '20px',
			width: '100%',
			display: 'flex',
		}}>
		<Grid sx={{ gap: '10px', width: '100%' }} justify={'center'}>
			{[
				{
					title: 'Find your next Home',
					icon: '/assets/icons/realestate.svg',
				},
				{
					title: 'Find a professional agent',
					icon: '/assets/icons/Agent.svg',
				},
				{ title: 'Find your next Home', icon: '/assets/icons/FindHouse.svg' },
			].map((item, index) => (
				<ServiceCard key={index} {...{ title: item.title, icon: item.icon }} />
			))}
		</Grid>
	</div>
);
export default Services;
