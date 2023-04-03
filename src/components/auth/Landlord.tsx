import { TextInput } from '@mantine/core';

const Landlord = ({ form }: { form: any }) => {
	console.log(form);
	return (
		<>
			<TextInput
				placeholder='Your full name'
				label='Full Name'
				withAsterisk
				{...form.getInputProps('full_name')}
			/>

			<TextInput
				placeholder='Identification number'
				withAsterisk
				label='ID No:'
				{...form.getInputProps('id_no')}
			/>

			<TextInput
				placeholder='KRA PIN'
				label='KRA PIN:'
				withAsterisk
				{...form.getInputProps('kra_pin')}
			/>
		</>
	);
};

export default Landlord;
