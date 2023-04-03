import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import CustomMap from '../components/maps/CustomMap';
import { Grid } from '@mantine/core';
import { PropertyCard } from '../components/cards/Card';

const Property = () => {
	const [showMap, setShowMap] = useState<boolean>(false);

	return (
		<>
			<Outlet />

			<div
				style={{
					...(showMap ? { width: '50%' } : { width: '100%' }),
					overflowY: 'hidden',
					background: '#fff',
					position: 'relative',
					zIndex: 1,
				}}
				className={'_listing'}>
				<Grid
					sx={{
						margin: '0px',
						marginTop: '6px',
						rowGap: '10px',
					}}
					justify={'space-evenly'}>
					{[1, 2, 3, 4, 5, 6, 7, 8].map((item, key) => (
						<PropertyCard key={key} />
					))}
				</Grid>
			</div>
			{showMap ? <CustomMap /> : null}
		</>
	);
};

export default Property;
