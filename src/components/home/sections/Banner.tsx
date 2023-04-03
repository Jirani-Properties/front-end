import { BackgroundImage } from '@mantine/core';
import { LandingSearch } from '../Search';

const Banner = ({ mediaQuery }: { mediaQuery: boolean }) => (
	<div
		style={{
			height: `${mediaQuery ? '92vh' : '89.5vh'}`,
			width: '100%',
		}}>
		<BackgroundImage
			style={{
				justifyContent: 'center',
				backgroundSize: 'cover',
				alignItems: 'center',
				objectFit: 'cover',
				width: '100%',
				height: '100%',
				display: 'flex',
			}}
			src='/assets/images/home1.jpg'>
			<LandingSearch />
		</BackgroundImage>
	</div>
);

export default Banner;
