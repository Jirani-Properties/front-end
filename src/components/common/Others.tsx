import { Button } from '@mantine/core';
import { authLinksInterface } from '../../types';

const Others = ({ open }: Pick<authLinksInterface, 'open'>) => {
	return (
		<div style={{ justifySelf: 'flex-end' }}>
			<Button
				sx={{
					'borderRadius': '20px',
					'background': '#000',
					'padding': '10px',
					':hover': {
						background: '#444',
					},
				}}
				onClick={(e) => {
					open();
				}}>
				Login / Signup
			</Button>
		</div>
	);
};

export default Others;
