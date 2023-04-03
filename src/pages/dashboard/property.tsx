import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from '@mantine/core';
import { randomId, useDisclosure } from '@mantine/hooks';

// components
import { DashboardSearchHeader } from '../../components/headers/Header';
import AddProperty from '../../components/property/AddProperty';
import DashboardModal from '../../components/property/Modal';

const DashboardProperty = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const navigate = useNavigate();
	const location = useLocation();

	const elements = [
		{
			property_name: 'Texas Apartment',
			location: 'Nairobi, Kenya',
			id: randomId(),
		},
		{
			property_name: 'Morph Apartment',
			location: 'Nairobi, Kenya',
			id: randomId(),
		},
		{
			property_name: 'Rongai Dream Apartment',
			location: 'Nairobi, Kenya',
			id: randomId(),
		},
		{
			property_name: 'Soko Apartment',
			location: 'Nairobi, Kenya',
			id: randomId(),
		},
		{
			property_name: 'Joy Apartment',
			location: 'Nairobi, Kenya',
			id: randomId(),
		},
	];
	const rows = elements.map((element, key) => (
		<tr key={key}>
			<td>{element.property_name}</td>
			<td>{element.location}</td>
			<td>
				<Button onClick={(e) => navigate(`${location.pathname}/${element.id}`)}>
					More
				</Button>
			</td>
		</tr>
	));

	return (
		<div style={{ width: '100%' }}>
			<DashboardModal
				{...{
					modalOpened: opened,
					title: 'Add Property',
					close,
				}}>
				<AddProperty />
			</DashboardModal>

			<div
				style={{
					justifyContent: 'flex-end',
					marginRight: '50px',
					marginBottom: '10px',
					display: 'flex',
				}}>
				<DashboardSearchHeader {...{ open }} />
			</div>

			<div style={{ width: '100%' }} className={'_listing'}>
				{/* <Grid>
					{[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
						<PropertyCard key={index} />
					))}
				</Grid> */}

				<Table>
					<thead>
						<tr>
							<th>Property name</th>
							<th>Location</th>
							<th>Action</th>
							{/* 
							<th>Atomic mass</th> */}
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
			</div>
		</div>
	);
};

export default DashboardProperty;
