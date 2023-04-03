import { NumberInput } from '@mantine/core';
import { formPropInterface } from '../../types';

const ForSale = ({ form }: formPropInterface) => {
	return (
		<>
			<NumberInput
				{...{
					...form.getInputProps('property_name'),
					placeholder: 'Selling price',
					label: 'Selling price',
					withAsterisk: true,
				}}
			/>
		</>
	);
};

export default ForSale;
