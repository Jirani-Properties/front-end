import { Box, Divider, Group, Text, Title } from '@mantine/core';
import { getTheme } from '../../custom-app/appFunctions';
import { PINK_COLOR } from '../../custom-app/configs';
import { IconCalendarTime, IconUser } from '@tabler/icons-react';

export const SingleBlogInList = (props: any) => {
	const { title, created_on, author } = props.blog;
	return (
		<>
			<Box
				py='xs'
				mb='xs'
				px='xs'
				sx={(theme) => ({
					'cursor': 'pointer',
					'borderLeft': `4px solid ${PINK_COLOR}`,
					'&:hover': {
						borderRadius: theme.radius.lg,
						background: getTheme(theme)
							? theme.colors.dark[6]
							: theme.colors.gray[1],
					},
				})}>
				<Title
					order={3}
					weight={400}
					sx={(theme) => ({
						lineHeight: '1.5rem',
						height: 'calc(2 * 1.5rem)',
						maxHeight: 'calc(2 * 1.5rem)',
						overflow: 'hidden',
					})}
					mb='md'>
					{title}
				</Title>
				<Group>
					<Group>
						<IconUser style={{ stroke: '#ff2e53' }} />
						<Text>{author}</Text>
					</Group>
					<Group>
						<IconCalendarTime style={{ stroke: '#ff2e53' }} />
						<Text>{created_on}</Text>
					</Group>
				</Group>
			</Box>
			<Divider mb='md' />
		</>
	);
};
