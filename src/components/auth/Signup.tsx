import { Box, Button, Checkbox, Group, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';
import { BasicUserInfo, SocialAuth } from './Common';
import Landlord from './Landlord';

const Signup = () => {
	const form = useForm({
		initialValues: {
			is_landlord: false,
			full_name: '',
			password: '',
			kra_pin: '',
			phone: '',
			id_no: '',
			email: '',
		},

		validate: {
			password: (value) =>
				/^\S{8,}$/.test(value) ? null : 'Invalid password provided',
			phone: (value) =>
				/^\d{10}$/.test(value) ? null : 'Invalid phone provided',
			email: (value) =>
				/^\S+@\S+$/.test(value) ? null : 'Invalid email provided',
			full_name: (value) =>
				/^\S+\s{1}\S+$/.test(value)
					? null
					: 'Your full name must contain 2 parts',
		},
	});

	const landlordForm = useForm({
		initialValues: {
			full_name: '',
			kra_pin: '',
			id_no: '',
		},

		validate: {
			full_name: (value) =>
				/^\S+\s{1}\S+$/.test(value)
					? null
					: 'Your full name must contain 2 parts',

			kra_pin: (value) =>
				/^\S+\s{1}\S+$/.test(value)
					? null
					: 'Your full name must contain 2 parts',

			id_no: (value) =>
				/^\d{8,}$/.test(value) ? null : 'Your ID No should be numeric',
		},
	});

	return (
		<Box maw={300} mx='auto' sx={{ margin: '10px auto' }}>
			<form
				onSubmit={form.onSubmit((values) => console.log(values))}
				style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
				<TextInput
					withAsterisk
					label='Email'
					placeholder='Enter your email'
					{...form.getInputProps('email')}
				/>

				<BasicUserInfo {...{ form }} />

				<Checkbox
					mt='md'
					label='Are you a landlord'
					{...form.getInputProps('is_landlord', { type: 'checkbox' })}
				/>

				{form.values.is_landlord ? (
					<Landlord {...{ form: landlordForm }} />
				) : null}

				<Group position='center' mt='md'>
					<Button type='submit' fullWidth>
						Proceed
					</Button>
				</Group>

				<Group>
					<Text size={'xs'} color={'dimmed'}>
						By submitting, I accept Hawk Home's{' '}
						<Link to={'/'}>terms of use</Link>
					</Text>
				</Group>
			</form>
			<SocialAuth />
		</Box>
	);
};

export default Signup;
