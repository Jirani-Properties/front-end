import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import { Grid, Select, Text, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';

import { categoryInterface, searchOptionsInterface } from '../../types';

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

	// const categoryCallback = ({ err, payload }: callbackInterface) => {
	// 	if (payload) {
	// 		const data: standardResponsePayload<categoryInterface> = payload;
	// 		setCategories(data.data);
	// 	} else console.log(err);
	// };

	const [offerType, setOfferType] = useState<
		{ label: string; value: string }[]
	>([
		{ label: 'All', value: 'All' },
		{ label: 'For Sell', value: 'forSale' },
		{ label: 'For Rent', value: 'forRent' },
	]);

	useEffect(() => {
		// getCategories({
		// 	callback: categoryCallback,
		// });
	}, []);

	useEffect(() => {}, [offerType]);

	return (
		<div
			style={{
				justifyContent: 'center',
				// space-evenly
				flexWrap: 'wrap',
				display: 'flex',
				width: '100%',
				gap: '10px',
			}}>
			<Grid justify={'start'} sx={{ width: '100%' }}>
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
				<Grid.Col sm={2} md={2} lg={2}>
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

				<Grid.Col sm={2} md={2} lg={2}>
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
					/>
				</Grid.Col>
			</Grid>
		</div>
	);
};
