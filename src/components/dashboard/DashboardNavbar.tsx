import { Navbar, NavLink } from '@mantine/core';
import {
	IconApps,
	IconHome,
	IconLogout,
	IconMessages,
	IconUser,
} from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import { authLinksInterface, DashboardNavbarLinksInterface } from '../../types';

const dashboardLinks: DashboardNavbarLinksInterface[] = [
	{
		icon: <IconUser size='1.5rem' stroke={1.5} />,
		to: '/dashboard/profile',
		label: 'Profile',
	},

	{
		icon: <IconLogout size='1.5rem' stroke={1.5} />,
		label: 'Logout',
		to: '/dashboard/logout',
	},
];

const landlordDashboardLinks: DashboardNavbarLinksInterface[] = [
	{
		label: 'Dashboard',
		icon: <IconApps size='1.5rem' stroke={1.5} />,
		to: '/dashboard',
	},
	{
		label: 'Properties',
		icon: <IconHome size='1.5rem' stroke={1.5} />,
		to: '/dashboard/properties',
	},
	{
		label: 'Notifications',
		icon: <IconMessages size='1.5rem' stroke={1.5} />,
		to: '/dashboard/notifications',
	},
];

const DashboardNavbar = ({
	modalOpened,
	close,
}: Pick<authLinksInterface, 'close' | 'modalOpened'>) => {
	const location = useLocation();

	return (
		<Navbar
			width={{ sm: 200, lg: 300 }}
			hiddenBreakpoint='sm'
			p='md'
			hidden={!modalOpened}>
			{[...landlordDashboardLinks, ...dashboardLinks].map((link, key) => (
				<Navbar.Section
					key={key}
					sx={{
						alignItems: 'center',
						display: 'flex',
						gap: '6px',
					}}>
					<NavLink
						{...{
							onClick: () => close(),
							icon: link.icon,
							style: {
								textDecoration: 'none',
								color: '#000',
							},
							active: location.pathname === link.to,
							component: Link,
							label: link.label,
							to: link.to,
						}}
					/>
				</Navbar.Section>
			))}
		</Navbar>
	);
};

export default DashboardNavbar;
