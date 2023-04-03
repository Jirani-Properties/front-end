import { Card, Divider, Skeleton, Text, Title } from '@mantine/core';
import {
	IconBathFilled,
	IconBedFilled,
	IconMapPin,
	IconResize,
} from '@tabler/icons-react';

export const HouseCard = () => {
	return (
		<Card
			sx={{
				boxShadow: '0px 0px 2px #000',
				maxWidth: '360px',
				cursor: 'pointer',
				width: '318px',
				height: '360px',
			}}>
			<Card.Section
				sx={{
					padding: '6px',
				}}>
				<Skeleton
					sx={{
						boxShadow: '0px 0px 4px #000',
						justifyContent: 'flex-end',
						alignContent: 'flex-end',
						flexDirection: 'column',
						alignItems: 'center',
						borderRadius: '4px',
						objectFit: 'contain',
						position: 'relative',
						userSelect: 'none',
						height: '240px',
						width: '100%',
						display: 'flex',
					}}>
					<Text
						sx={{
							background: '#808080aa',
							alignItems: 'center',
							paddingRight: '4px',
							position: 'absolute',
							display: 'flex',
							color: '#fff',
							left: '6px',
							gap: '4px',
							top: '2px',
						}}
						style={{}}
						size={'sm'}>
						<IconMapPin size={'1rem'} />{' '}
						<Skeleton sx={{ width: '16px' }} radius={'xl'} />
					</Text>
				</Skeleton>
			</Card.Section>
			<Card.Section
				sx={{
					padding: '6px',
				}}>
				<Title order={4} size={'h4'} sx={{ padding: '0px', margin: '0px' }}>
					<Skeleton sx={{ width: '16px' }} radius={'xl'} />
				</Title>

				<div style={{ display: 'flex' }}>
					<Text color={'#00f'} size={'md'} weight={700}>
						<Skeleton sx={{ width: '16px' }} radius={'xl'} />
					</Text>
					<Text>
						<Skeleton sx={{ width: '16px' }} radius={'xl'} />
					</Text>
				</div>
			</Card.Section>

			<Divider
				sx={{
					marginTop: '10px',
					width: '100%',
					color: 'red',
				}}
				orientation={'horizontal'}
			/>
			<Skeleton
				sx={{
					justifyContent: 'space-around',
					alignItems: 'center',
					padding: '6px',
					display: 'flex',
				}}>
				<div
					style={{
						justifyContent: 'space-around',
						alignItems: 'center',
						display: 'flex',
					}}>
					<IconBedFilled size={'1.3rem'} color={'#00f'} />
					<p style={{ padding: '0px', margin: '0px', fontSize: '14px' }}>
						<Skeleton sx={{ width: '16px' }} radius={'xl'} />
					</p>
				</div>
				<div
					style={{
						justifyContent: 'space-around',
						alignItems: 'center',
						display: 'flex',
					}}>
					<IconBathFilled size={'1.3rem'} />
					<p style={{ padding: '0px', margin: '0px', fontSize: '14px' }}>
						<Skeleton sx={{ width: '16px' }} radius={'xl'} />
					</p>
				</div>

				<div
					style={{
						justifyContent: 'space-around',
						alignItems: 'center',
						display: 'flex',
					}}>
					<IconResize size={'1.3rem'} />
					<p style={{ padding: '0px', margin: '0px', fontSize: '14px' }}>
						<Skeleton sx={{ width: '16px' }} radius={'xl'} />
					</p>
				</div>
			</Skeleton>
		</Card>
	);
};
