import { useDisclosure } from '@mantine/hooks';

import DashboardModal from '../../components/property/Modal';
import AddHouse from '../../components/property/AddHouse';

const DashboardHouse = () => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<div style={{}}>
			<DashboardModal
				{...{
					modalOpened: opened,
					title: 'Add House',
					close,
				}}>
				<AddHouse />
			</DashboardModal>

			<div style={{}}>Header</div>
		</div>
	);
};

export default DashboardHouse;
