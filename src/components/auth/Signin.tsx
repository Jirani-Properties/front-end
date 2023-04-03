import { Box, Button, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { BasicUserInfo, SocialAuth } from './Common';

const SignIn = () => {
	const form = useForm({
		initialValues: {
			password: '',
			phone: '',
		},

		validate: {
			phone: (value) => (/^\d{10}$/.test(value) ? null : 'Invalid phone'),
			password: (value) => (/^\S{8,}$/.test(value) ? null : 'Invalid password'),
		},
	});

	return (
		<Box maw={340} mx='auto' sx={{ margin: '10px auto' }}>
			<form
				onSubmit={form.onSubmit((values) => console.log(values))}
				style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
				<BasicUserInfo {...{ form }} />

				<Group position='center' mt='md'>
					<Button type='submit' fullWidth>
						Login
					</Button>
				</Group>

				<Group sx={{ display: 'flex', justifyContent: 'center' }}>
					<Text
						size={'lg'}
						color={'blue'}
						sx={{ cursor: 'pointer', userSelect: 'none' }}>
						Forgot password?
					</Text>
				</Group>
			</form>
			<SocialAuth />
		</Box>
	);
};

export default SignIn;
