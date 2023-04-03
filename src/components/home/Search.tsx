import {
	TextInput,
	Text,
	Grid,
	Select,
	SimpleGrid,
	Divider,
	Title,
} from '@mantine/core';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { categoryInterface, searchOptionsInterface } from '../../types';

export const Search = () => {
	return (
		<div
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: '50px',
				background: '#fff',
				maxWidth: '700px',
				padding: '2px 6px',
				marginTop: '30px',
				height: '56px',
				width: '90%',
				display: 'flex',
				gap: '10px',
			}}>
			<SimpleGrid
				style={{
					flexDirection: 'row',
					marginLeft: '4px',
					display: 'flex',
					flex: 3,
				}}>
				<Select
					data={['All', 'For Rent', 'For Sale']}
					defaultValue={'All'}
					styles={{
						dropdown: { 'border': 'none', ':active': { border: 'none' } },
					}}
					rightSection={<IconChevronDown size='1rem' />}
				/>
				<Divider orientation='vertical' />
				<Select
					data={['Houses', 'Property']}
					defaultValue={'Houses'}
					styles={{
						dropdown: {
							'border': 'none',
							'outline': 'none',
							':active': { border: 'none' },
						},
					}}
					rightSection={<IconChevronDown size='1rem' />}
				/>
			</SimpleGrid>
			<div style={{ flex: 4 }}>
				<TextInput
					placeholder={'Search location or property name'}
					styles={{
						input: {
							'border': 'none',
							':active': {
								border: 'none',
							},
						},
					}}
				/>
			</div>
			<Text
				component='button'
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: '60px',
					background: '#000',
					border: 'none',
					display: 'flex',
					height: '90%',
					color: '#fff',
					flex: 1.2,
				}}>
				<IconSearch /> Search
			</Text>
		</div>
	);
};

export const ListingSearch = ({
	searchOptions,
	setSearchOptions,
}: {
	setSearchOptions: React.Dispatch<Partial<searchOptionsInterface>>;
	searchOptions: searchOptionsInterface;
}) => {
	const [categories, setCategories] = useState<categoryInterface[]>(
		[] as categoryInterface[]
	);

	const [offerType, setOfferType] = useState<
		{ label: string; value: string }[]
	>([
		{ label: 'All', value: 'All' },
		{ label: 'For Sell', value: 'forSale' },
		{ label: 'For Rent', value: 'forRent' },
	]);

	useEffect(() => {}, []);

	useEffect(() => {}, [offerType]);

	return (
		<div
			style={{
				justifyContent: 'space-between',
				flexWrap: 'wrap',
				display: 'flex',
				width: '100%',
				background: 'red',
				gap: '10px',
			}}>
			<Grid justify={'start'} sx={{}}>
				<Grid.Col sm={5} md={5} lg={5}>
					<TextInput
						value={searchOptions.location}
						placeholder={'Search here'}
						icon={<IconSearch />}
						onChange={(e) => setSearchOptions({ location: e.target.value })}
					/>
				</Grid.Col>

				<Grid.Col sm={3} md={3} lg={3}>
					<Select
						rightSection={<IconChevronDown size='1rem' />}
						data={[
							{ label: 'All Types', value: '' },
							...categories.map((currItem) => ({
								label: currItem.name,
								value: currItem.id,
							})),
						]}
						onChange={(category) =>
							setSearchOptions({ category: category as string })
						}
						value={searchOptions.category}
						nothingFound='Option not found'
						placeholder='Category'
						searchable
					/>
				</Grid.Col>
				<Grid.Col sm={3} md={3} lg={3}>
					<Select
						rightSection={<IconChevronDown size='1rem' />}
						nothingFound='Option not found'
						placeholder='Offer Type'
						defaultValue={'All'}
						data={offerType}
						onChange={(selected) =>
							setSearchOptions({
								...(selected === 'forRent' ? { for_sale: false } : {}),
								...(selected === 'forSale' ? { for_sale: true } : {}),
								...(selected === 'All' ? { for_sale: 'All' } : {}),
							})
						}
					/>
				</Grid.Col>
			</Grid>

			<div style={{}}>
				<Select
					rightSection={<IconChevronDown size='1rem' />}
					onChange={(order) => setSearchOptions({ order: order as string })}
					icon={<Text size={'sm'}>Sort:</Text>}
					nothingFound='Option not found'
					value={searchOptions.order}
					sx={{ paddingLeft: '20px' }}
					defaultValue={'ASC'}
					data={[
						{ label: 'Cheapest', value: 'ASC' },
						{ label: 'Most Expensive', value: 'DESC' },
					]}
					placeholder='Type'
					searchable
				/>
			</div>
		</div>
	);
};

export const LandingSearch = () => {
	return (
		<motion.div
			{...{
				whileInView: { opacity: 1 },
				transition: { delay: 0.06 },
				viewport: { once: false },
				initial: { opacity: 0 },
				style: {
					flexDirection: 'column',
					maxWidth: '600px',
					width: '80%',
					display: 'flex',
					gap: '10px',
				},
			}}>
			<Title {...{ color: '#fff', style: { textAlign: 'center' } }}>
				Find your next home
			</Title>
			<TextInput
				placeholder='Enter an address or location name'
				sx={{ width: '100%' }}
				styles={{
					input: { height: '50px' },
				}}
				icon={<IconSearch />}
			/>
		</motion.div>
	);
};
