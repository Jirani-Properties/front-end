import { Container, Grid, Title } from '@mantine/core';

import { propertyInterface, tagsInterface } from '../../types';
import Property from '../../pages/Properties';

const FeaturedProperties = ({
	propertyData,
}: {
	propertyData: propertyInterface<string, tagsInterface>[];
}) => {
	return (
		<Container size={'xl'} sx={{ marginTop: '60px' }}>
			<Title sx={{ margin: '0px' }} size={'h3'} order={1}>
				Featured Property
			</Title>

			<Grid sx={{ margin: '0px', marginTop: '20px' }} justify={'flex-start'}>
				{Array(4)
					.fill(0)
					.map((item, key) => (
						<Property key={key} {...item} {...{ onclick: () => {} }} />
					))}
			</Grid>
		</Container>
	);
};

export default FeaturedProperties;
