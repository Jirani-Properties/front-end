import { Button } from '@mantine/core';
import { useReducer } from 'react';
import { authLinksInterface, searchOptionsInterface } from '../../types';
import CustomLinks from '../common/CustomLinks';
import Logo from '../common/Logo';
import Others from '../common/Others';
import { ListingSearch } from '../search/Search';

const MainHeader = ({ open }: Pick<authLinksInterface, 'open'>) => {
	return (
		<div
			style={{
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '20px',
				height: '60px',
				display: 'flex',
				width: '100%',
			}}>
			<CustomLinks />
			<Logo />
			<Others {...{ open }} />
		</div>
	);
};

export default MainHeader;

export const DashboardSearchHeader = ({
	open,
}: Pick<authLinksInterface, 'open'>) => {
	const [searchOptions, setSearchOptions] = useReducer(
		(state: searchOptionsInterface, curr: Partial<searchOptionsInterface>) => {
			return { ...state, ...curr };
		},
		{
			cost: { min: 0, max: 0 },
			order: 'ascending',
			for_sale: 'All',
			category: '',
			location: '',
		} as searchOptionsInterface
	);
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
			<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Button
					sx={{
						'borderRadius': '5px',
						'background': '#000',
						'padding': '10px',
						':hover': {
							background: '#444',
						},
					}}
					onClick={(e) => {
						open();
					}}>
					Submit an Apartment
				</Button>
			</div>

			<ListingSearch {...{ searchOptions, setSearchOptions }} />
		</div>
	);
};
