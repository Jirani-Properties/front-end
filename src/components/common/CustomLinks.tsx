import { Link } from 'react-router-dom';
import { HeaderLinks } from '../../utils/links';

const CustomLinks = () => {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
			{HeaderLinks.map((item, index) => (
				<Link
					style={{
						textTransform: 'capitalize',
						textDecoration: 'none',
						color: '#000',
					}}
					to={item.href}
					key={index}>
					{item.label}
				</Link>
			))}
		</div>
	);
};

export default CustomLinks;
