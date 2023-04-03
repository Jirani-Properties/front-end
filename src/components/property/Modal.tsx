import { Drawer } from '@mantine/core';

import {
	authLinksInterface,
	ChildPropInterface,
	titleInterface,
} from '../../types';

const DashboardModal = ({
	modalOpened,
	children,
	title,
	close,
}: titleInterface &
	ChildPropInterface &
	Pick<authLinksInterface, 'close' | 'modalOpened'>) => {
	return (
		<Drawer
			{...{
				onClose: close,
				position: 'right',
				opened: modalOpened,
				title,
			}}
			styles={{
				content: { padding: '0px', margin: '0px' },
			}}>
			{children}
		</Drawer>
	);
};

export default DashboardModal;
