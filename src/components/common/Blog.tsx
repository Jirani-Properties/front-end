import { Grid, Title, Text, BackgroundImage, Group } from '@mantine/core';
import { Tag } from './tags';

const Blog = () => {
	return (
		<Grid.Col sm={10} md={10} lg={10} sx={{}}>
			<Grid>
				<Grid.Col sm={3} md={3} lg={3}>
					<BackgroundImage
						component='div'
						src={'/assets/images/home1.jpg'}
						sx={{
							justifyContent: 'flex-end',
							alignContent: 'flex-end',
							flexDirection: 'column',
							alignItems: 'center',
							borderRadius: '10px',
							objectFit: 'contain',
							height: '140px',
							width: '100%',
							display: 'flex',
						}}
					/>
				</Grid.Col>

				<Grid.Col sm={8} md={8} lg={8}>
					<Title size={'h4'} order={4} color='#000'>
						How To choose the right furniture for your home like a pro
					</Title>
					<Text size={'sm'} color='#000'>
						{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem
						recusandae impedit consequuntur velit sapiente nulla molestiae
						repellendus pariatur, nostrum quod dolor suscipit saepe magnam id,
						modi nobis temporibus. Iure?`.substring(0, 100)}
					</Text>

					<Group sx={{ margin: '6px 2px' }}>
						<Tag {...{ content: 'Real Estate', color: ['#fafafa', '#000'] }} />
						<Tag {...{ content: 'Tips', color: ['#fafafa', '#000'] }} />
					</Group>
				</Grid.Col>
			</Grid>
		</Grid.Col>
	);
};

export default Blog;
