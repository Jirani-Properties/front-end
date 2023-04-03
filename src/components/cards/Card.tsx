import { Button, Card, Divider, Grid, Text, Title } from '@mantine/core';
import {
	IconBathFilled,
	IconBedFilled,
	IconMapPin,
	IconResize,
	IconShield,
	IconSwimming,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorHandler from '../boundary/ErrorBoundary';
import { CustomPlainSkeleton } from '../common/CustomLoader';
import { LazyBGImage } from '../common/ImgSuspense';

export const HouseCard = ({ size }: { size?: number[] }) => {
	return (
		<ErrorBoundary fallback={<ErrorHandler />}>
			<Grid.Col
				sm={size && size?.length > 0 ? size[0] : 5}
				md={size && size?.length > 0 ? size[1] : 3}
				lg={size && size?.length > 0 ? size[2] : 2.97}
				sx={{ padding: '0px' }}>
				<motion.div
					{...{
						whileInView: { y: 0, opacity: 1 },
						transition: { delay: 0.02 },
						viewport: { once: false },
						initial: { y: 100, opacity: 0 },
						style: {
							borderRadius: '4px',
							padding: '6px 4px',
							background: '#fff',
							height: '100%',
							width: '100%',
						},
					}}>
					<Card
						sx={{
							boxShadow: '0px 0px 2px #000',
							maxWidth: '360px',
							cursor: 'pointer',
							// width: '98%',
							height: '320px',
						}}>
						<Card.Section
							sx={{
								padding: '6px',
							}}>
							<Suspense
								fallback={
									<CustomPlainSkeleton
										{...{
											style: {
												height: '200px',
											},
										}}
									/>
								}>
								<LazyBGImage
									{...{
										src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
										style: {
											boxShadow: '0px 0px 4px #000',
											justifyContent: 'flex-end',
											alignContent: 'flex-end',
											flexDirection: 'column',
											alignItems: 'center',
											borderRadius: '4px',
											objectFit: 'contain',
											position: 'relative',
											userSelect: 'none',
											height: '200px',
											width: '100%',
											display: 'flex',
										},
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
										size={'sm'}>
										<IconMapPin size={'1rem'} /> Mombasa, Kenya
									</Text>
								</LazyBGImage>
							</Suspense>
						</Card.Section>
						<Card.Section
							sx={{
								padding: '6px',
							}}>
							<Title
								order={4}
								size={'h4'}
								sx={{ padding: '0px', margin: '0px' }}>
								Miracle De prim 123
							</Title>

							<div style={{ display: 'flex' }}>
								<Text color={'#00f'} size={'md'} weight={700}>
									Ksh {(4000).toLocaleString('en-Us')}
								</Text>
								<Text>/mo</Text>
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
						<Card.Section
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
									3 Beds
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
									2 Bathrooms
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
						</Card.Section>
					</Card>
				</motion.div>
			</Grid.Col>
		</ErrorBoundary>
	);
};

export const PropertyCard = () => {
	return (
		<ErrorBoundary fallback={<>Error Handler</>}>
			<Grid.Col sm={5} md={3} lg={2.97} sx={{ padding: '0px' }}>
				<motion.div
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.06 }}
					initial={{ opacity: 0 }}
					viewport={{ once: false }}>
					<Card
						sx={{
							boxShadow: '0px 0px 2px #000',
							maxWidth: '360px',
							cursor: 'pointer',
							height: '320px',
						}}>
						<Card.Section
							sx={{
								padding: '6px',
							}}>
							<LazyBGImage
								{...{
									style: {
										boxShadow: '0px 0px 4px #000',
										justifyContent: 'flex-end',
										alignContent: 'flex-end',
										flexDirection: 'column',
										alignItems: 'center',
										borderRadius: '4px',
										objectFit: 'contain',
										position: 'relative',
										userSelect: 'none',
										height: '200px',
										width: '100%',
										display: 'flex',
									},
									src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
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
									size={'sm'}>
									<IconMapPin size={'1rem'} /> Mombasa, Kenya
								</Text>
							</LazyBGImage>
						</Card.Section>
						<Card.Section
							sx={{
								padding: '6px',
							}}>
							<Title
								order={4}
								size={'h4'}
								sx={{ padding: '0px', margin: '0px' }}>
								Texas Apartment
							</Title>

							<div style={{ display: 'flex' }}>
								<Text size={'sm'}>Property</Text>
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
						<Card.Section
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
								<IconShield size={'1.3rem'} />
								<p style={{ padding: '0px', margin: '0px', fontSize: '14px' }}>
									Security
								</p>
							</div>
							<div
								style={{
									justifyContent: 'space-around',
									alignItems: 'center',
									display: 'flex',
								}}>
								<IconSwimming size={'1.3rem'} />
								<p style={{ padding: '0px', margin: '0px', fontSize: '14px' }}>
									Swimming Pool
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
						</Card.Section>
					</Card>
				</motion.div>
			</Grid.Col>
		</ErrorBoundary>
	);
};

export const ServiceCard = ({
	icon,
	title,
}: {
	icon: string;
	title: string;
}) => {
	return (
		<Grid.Col sm={3} md={3} lg={3} sx={{ height: '360px' }}>
			<motion.div
				{...{
					whileInView: {
						opacity: 1,
					},
					transition: { delay: 0.02 },
					viewport: { once: true },
					initial: {
						opacity: 0,
					},
					style: {
						flexDirection: 'column',
						borderRadius: '4px',
						padding: '6px 4px',
						background: '#fff',
						height: '100%',
						gap: '10px',
						display: 'flex',
						width: '100%',
					},
				}}>
				<div
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						display: 'flex',
					}}>
					<img
						{...{
							style: { height: '200px', width: '200px' },
							alt: 'illustration',
							loading: 'lazy',
							src: icon,
						}}
					/>
				</div>
				<Title order={2} size={'h3'} sx={{ textAlign: 'center' }}>
					{title}
				</Title>
				<Text component={'p'} color={'dimmed'} style={{ textAlign: 'center' }}>
					Find your next home with Hawk Homes{' '}
				</Text>

				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						sx={{
							'border': '1px solid #000',
							'background': 'inherit',
							'borderRadius': '20px',
							'padding': '6px 10px',
							'color': '#000',
							':hover': {
								background: '#000',
								color: '#fff',
							},
						}}
						onClick={(e) => {
							// open();
						}}>
						Check out Listings
					</Button>
				</div>
			</motion.div>
		</Grid.Col>
	);
};
