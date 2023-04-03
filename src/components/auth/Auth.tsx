import { Modal, Tabs, Text, Transition, useMantineTheme } from '@mantine/core';

// dev components
import { authLinksInterface } from '../../types';
import SignIn from './Signin';
import Signup from './Signup';

const Auth = ({ open, close, modalOpened }: authLinksInterface) => {
	const theme = useMantineTheme();

	return (
		<Transition
			mounted={modalOpened}
			transition='fade'
			duration={400}
			timingFunction='ease'>
			{(styles) => (
				<Modal
					{...{
						title: 'Welcome to Hawk Homes',
						opened: modalOpened,
						centered: true,
						onClose: close,
						overlayProps: {
							color:
								theme.colorScheme === 'dark'
									? theme.colors.dark[9]
									: theme.colors.gray[2],
							opacity: 0.55,
							blur: 3,
						},
						style: styles,
					}}>
					<Tabs defaultValue={'login'}>
						<Tabs.List>
							<Tabs.Tab value='login'>
								<Text weight={700}>Sign in</Text>
							</Tabs.Tab>
							<Tabs.Tab value='register'>
								<Text weight={700}>Register</Text>
							</Tabs.Tab>
						</Tabs.List>

						<Tabs.Panel value='login'>
							<SignIn />
						</Tabs.Panel>
						<Tabs.Panel value='register'>
							<Signup />
						</Tabs.Panel>
					</Tabs>
				</Modal>
			)}
		</Transition>
	);
};

export default Auth;
