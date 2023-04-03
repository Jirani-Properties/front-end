import { Text, Title } from '@mantine/core';

import { Search } from './Search';

import { BackgroundImage } from '@mantine/core';
const Banner = () => {
	return (
		<BackgroundImage
			component='div'
			src='/static/anotherBg.jpg'
			sx={{
				justifyContent: 'center',
				alignContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: 'fff',
				objectFit: 'contain',

				height: '80vh',
				width: '100%',
				display: 'flex',
			}}>
			<Title
				sx={{
					// backdropFilter: 'blur(5px)',
					// background: '#ffffff66',
					textAlign: 'center',
					padding: '4px 10px',
					color: '#fff',
					margin: '0px',
				}}
				size={'h1'}
				order={1}>
				Discover property more easily
			</Title>
			<Text
				sx={{ color: '#fff', margin: '0px', textAlign: 'center' }}
				size={'sm'}
				component='p'>
				Jirani help people find their perfect home for better life
			</Text>

			<Search />
		</BackgroundImage>
	);
};

export default Banner;
