import { useLocation } from 'react-router-dom';

const Page404 = () => {
	const location = useLocation();

	return (
		<div style={{}}>
			This page <span style={{ color: 'gray' }}>{location.pathname}</span>{' '}
			you've requested could not be found.
		</div>
	);
};

export default Page404;
