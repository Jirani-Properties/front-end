import {
	AppShell,
	Burger,
	Divider,
	Drawer,
	Header,
	MediaQuery,
	Text,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Auth from '../components/auth/Auth';
import Footer from '../components/footer/Footer';
import MainHeader from '../components/headers/Header';
import { HeaderLinks } from '../utils/links';

const Root = () => {
	const [openHumbugger, setToggleHumbugger] = useState<boolean>(false);
	const mediaQuery = useMediaQuery('(max-width: 48em)');

	const [opened, { open, close }] = useDisclosure(false);

	return (
		<AppShell
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			styles={{
				main: {
					padding: '0px !important',
					paddingTop: `${mediaQuery ? '50px' : '70px'} !important`,
				},
			}}
			header={
				<Header
					height={{ base: 50, md: 70 }}
					p='md'
					sx={{
						padding: '0px',
						margin: '0px',
					}}>
					<div
						style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
						<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
							<Burger
								onClick={() => setToggleHumbugger((prev) => !prev)}
								opened={openHumbugger}
								size='sm'
								mr='xl'
							/>
						</MediaQuery>

						<MediaQuery smallerThan='md' styles={{ display: 'none' }}>
							<div style={{ width: '100%', height: 'auto' }}>
								<MainHeader {...{ open }} />
							</div>
						</MediaQuery>
					</div>
				</Header>
			}
			footer={<Footer />}>
			<Drawer
				scrollAreaComponent={Drawer.NativeScrollArea}
				onClose={() => setToggleHumbugger(false)}
				opened={openHumbugger}
				position='left'
				padding='xl'
				size='xs'>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
					<Link
						style={{
							textTransform: 'capitalize',
							textDecoration: 'none',
							color: '#000',
						}}
						onClick={(e) => setToggleHumbugger((prev) => !prev)}
						to={'/'}>
						Home
						<Divider />
					</Link>
					{HeaderLinks.map((item, index) => (
						<Link
							style={{
								textTransform: 'capitalize',
								textDecoration: 'none',
								color: '#000',
							}}
							onClick={(e) => setToggleHumbugger((prev) => !prev)}
							to={item.href}
							key={index}>
							{item.label}
							<Divider />
						</Link>
					))}

					<Text
						style={{
							textTransform: 'capitalize',
							textDecoration: 'none',
							color: '#000',
						}}
						onClick={(e) => {
							setToggleHumbugger((prev) => !prev);
							open();
						}}>
						Signup / Login
						<Divider />
					</Text>
				</div>
			</Drawer>

			<Auth {...{ modalOpened: opened, open, close }} />
			<Outlet />
		</AppShell>
	);
};

export default Root;
