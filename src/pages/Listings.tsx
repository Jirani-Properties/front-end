import { Outlet } from 'react-router-dom';
import { Grid } from '@mantine/core';
import { useState } from 'react';

import CustomMap from '../components/maps/CustomMap';
import { HouseCard } from '../components/cards/Card';

const Listing = () => {
	const [showMap, setShowMap] = useState<boolean>(false);
	const sampleData = Array(100).fill(0);

	return (
		<>
			<Outlet />

			<div
				style={{
					...(showMap ? { width: '50%' } : { width: '100%' }),
					background: '#fff',
					position: 'relative',
					height: '100%',
					zIndex: 1,
				}}>
				<Grid
					sx={{
						marginTop: '4px',
						rowGap: '10px',
						margin: '0px',
					}}
					justify={'space-evenly'}>
					{sampleData.map((item, key) => (
						<HouseCard key={key} />
					))}
				</Grid>
			</div>
			{showMap ? <CustomMap /> : null}
		</>
	);
};

export default Listing;
