import { Burger, Header, MediaQuery, useMantineTheme } from '@mantine/core';
import { authLinksInterface } from '../../types';

const DashboardHeader = ({
	modalOpened,
	setOpened,
}: Pick<authLinksInterface, 'modalOpened' | 'setOpened'>) => {
	const theme = useMantineTheme();

	return (
		<Header height={60} p='xs'>
			<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
				<Burger
					onClick={() => (setOpened ? setOpened((o) => !o) : null)}
					color={theme.colors.gray[6]}
					opened={modalOpened}
					size='sm'
					mr='xl'
				/>
			</MediaQuery>
			<>Hello</>
		</Header>
	);
};
export default DashboardHeader;
