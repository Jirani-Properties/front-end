import { Link } from 'react-router-dom';

const Logo = ({ back }: { back?: string }) => {
	return (
		<Link
			to={'/'}
			style={{
				textDecoration: 'none',
				color: '#000',
			}}>
			<img
				{...(back ? { style: { borderRadius: '100%', margin: 'auto' } } : {})}
				src={back ?? '/logo/logo-black.svg'}
				width={'100px'}
				style={{ height: '70px' }}
			/>{' '}
			HawkHomes
		</Link>
	);
};

export default Logo;
