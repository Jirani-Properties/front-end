import { Button, Container, Grid, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { HouseCard } from '../../cards/Card';

const Recommendation = () => {
	const navigate = useNavigate();

	return (
		<div
			style={{
				justifyContent: 'center',
				paddingBottom: '30px',
				alignItems: 'center',
				minHeight: '89.5vh',
				background: '#fff',
				paddingTop: '30px',
				width: '100%',
				color: '#000',
				display: 'flex',
			}}>
			<div style={{}}>
				<Title order={3} size={'h3'}>
					Recommended houses
				</Title>
				<Container size={'xl'}>
					<Grid
						sx={{
							justifyContent: 'center',
							marginBottom: '10px',
							marginTop: '10px',
							gap: '20px',
						}}>
						{Array(6)
							.fill(0)
							.map((item, index) => (
								<HouseCard
									key={index}
									{...{
										size: [3, 3, 3],
									}}
								/>
							))}
					</Grid>
					<div
						style={{
							justifyContent: 'center',
							display: 'flex',
						}}>
						<Button
							sx={{
								'border': '1px solid #000',
								'background': 'inherit',
								'borderRadius': '20px',
								'padding': '6px 10px',
								'color': '#000',
								':hover': {
									background: '#000',
									color: '#fff',
								},
							}}
							onClick={(e) => navigate('/listings')}>
							See more like this
						</Button>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Recommendation;
