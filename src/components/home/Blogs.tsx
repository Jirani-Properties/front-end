import { Container, Grid, Title, Text, BackgroundImage } from '@mantine/core';
import Blog from '../common/Blog';

const Blogs = () => (
	<Container
		size={'xl'}
		sx={{ marginTop: '80px', background: '#fff', padding: '20px 10px' }}>
		<Title sx={{ color: '#000', margin: '0px' }} size={'h3'} order={1}>
			Learn about property{' '}
		</Title>

		<Grid sx={{ gap: '6px', justifyContent: 'center' }}>
			<Grid.Col sm={8} md={4} lg={4}>
				<div style={{ height: '250px', position: 'relative' }}>
					<BackgroundImage
						style={{ objectFit: 'contain', width: '100%', height: '100%' }}
						src={'/assets/images/home1.jpg'}
					/>
				</div>
				<Title order={3} size={'h3'} color='#000'>
					How to add color to your Kitchen
				</Title>

				<Text size={'md'} color='#000' component='p'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic totam
					inventore sit esse sed, minima modi, animi dignissimos veritatis
					facilis natus velit repudiandae eius ipsa expedita aspernatur vero
					consectetur quae.
				</Text>
			</Grid.Col>

			<Grid.Col sm={8} md={7} lg={7} sx={{}}>
				<Grid sx={{ gap: '2px' }}>
					{[1, 2, 3, 4, 5].map((item, index) => (
						<Blog key={index} />
					))}
				</Grid>
			</Grid.Col>
		</Grid>
	</Container>
);

export default Blogs;
