import { IconBathFilled, IconBedFilled, IconResize } from '@tabler/icons-react';
import { Grid, Text, Title } from '@mantine/core';
import { Suspense, useState } from 'react';

import { LazyBGImage, LazyImage } from '../components/common/ImgSuspense';
import { CustomPlainSkeleton } from '../components/common/CustomLoader';
import { HouseCard } from '../components/cards/Card';

const House = () => {
	const [selected, setSelected] = useState<string>(`/assets/images/home1.jpg`);

	return (
		<div
			style={{
				flexDirection: 'column',
				display: 'flex',
				gap: '16px',
			}}>
			<Grid>
				<Grid.Col sm={5} md={5} lg={5}>
					<Suspense fallback={<CustomPlainSkeleton />}>
						<LazyBGImage
							{...{
								style: {
									justifyContent: 'flex-end',
									alignContent: 'flex-end',
									flexDirection: 'column',
									alignItems: 'center',
									objectFit: 'contain',
									position: 'relative',
									userSelect: 'none',
									height: '300px',
									width: '100%',
									display: 'flex',
								},
								src: selected,
							}}
						/>
					</Suspense>
				</Grid.Col>
				<Grid.Col sm={5} md={5} lg={5}>
					<Title size={'h3'} order={3}>
						Texas Apartments
					</Title>
					<div
						style={{
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
								3 Bedroom(s)
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
								2 Bathroom(s)
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
								1,259 sqft
							</p>
						</div>
					</div>

					<div style={{ margin: '10px auto' }}>
						<Text size={'sm'}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Architecto nihil dicta deleniti cumque corporis et maxime pariatur
							quia at unde. Asperiores perspiciatis natus quo, aliquid officiis
							doloribus. Odio, dignissimos cupiditate!
						</Text>
					</div>

					<Text color={'dimmed'} sx={{ margin: '10px auto' }}>
						More Images
					</Text>

					<div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
						{[1, 2, 3, 4].map((item, index) => (
							<div
								key={index}
								style={{
									...(selected === `/assets/images/home${index + 1}.jpg`
										? { border: '2px solid #0f0' }
										: {}),
									borderRadius: '6px',
									padding: '2px',
									height: '80px',
									width: '100px',
								}}
								onClick={(e) =>
									setSelected(`/assets/images/home${index + 1}.jpg`)
								}>
								<Suspense fallback={<CustomPlainSkeleton />}>
									<LazyImage
										{...{
											src: `/assets/images/home${index + 1}.jpg`,
											style: { width: '100%', height: '100%' },
										}}
									/>
								</Suspense>
							</div>
						))}
					</div>
				</Grid.Col>
			</Grid>

			<div style={{}}>
				<Text color={'dimmed'} weight={700}>
					More Like this
				</Text>
				<div
					style={{
						overflowY: 'auto',
						flexWrap: 'wrap',
						display: 'flex',
						height: '100%',
						gap: '6px',
					}}>
					{[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
						<HouseCard key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default House;
