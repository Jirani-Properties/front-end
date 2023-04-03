import { AppShell, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import DashboardHeader from './DashboardHeader';
import DashboardNavbar from './DashboardNavbar';
import Logo from '../common/Logo';

const DashboardLayout = () => {
	const [openHumbugger, setToggleHumbugger] = useState<boolean>(false);

	const [opened, { open, close }] = useDisclosure(false);

	return (
		<AppShell
			header={<DashboardHeader {...{ setOpened: open, modalOpened: opened }} />}
			navbar={<DashboardNavbar {...{ modalOpened: opened, close }} />}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			layout={'alt'}
			sx={{
				padding: '0px',
				margin: '0px',
			}}>
			<Drawer
				scrollAreaComponent={Drawer.NativeScrollArea}
				onClose={() => setToggleHumbugger(false)}
				title={<Logo {...{ back: '/logo/logo-color.svg' }} />}
				opened={openHumbugger}
				position='left'
				padding='xl'
				size='xs'>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
					}}></div>
			</Drawer>
			<Outlet />
		</AppShell>
	);
};

export default DashboardLayout;
