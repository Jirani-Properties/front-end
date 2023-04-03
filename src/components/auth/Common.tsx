import { Button, Divider, PasswordInput, Text, TextInput } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';
import { formPropInterface } from '../../types';

export const BasicUserInfo = ({ form }: formPropInterface) => {
	return (
		<>
			<TextInput
				withAsterisk
				label='Phone'
				placeholder='+254...'
				{...form.getInputProps('phone')}
			/>

			<PasswordInput
				icon={<IconLock size={'1rem'} />}
				placeholder='password'
				label='Password'
				withAsterisk
				{...form.getInputProps('password')}
			/>
		</>
	);
};

export const SocialAuth = () => {
	return (
		<div style={{ marginTop: '14px' }}>
			<Divider />
			<div style={{ margin: '10px auto' }}>
				<Text sx={{ textAlign: 'center' }}>Or Connect through</Text>

				<div
					style={{
						flexDirection: 'column',
						marginTop: '10px',
						display: 'flex',
						gap: '10px',
					}}>
					{[
						{ provider: 'Apple', color: '#000' },
						{ provider: 'Facebook', color: '' },
						{ provider: 'Google', color: '#aaaaaa00' },
					].map((item, index) => (
						<Button
							key={index}
							sx={{
								...(item.color ? { background: item.color } : {}),
								...(item.provider === 'Google'
									? { color: '#000' }
									: { color: '#fff' }),
								'border': '1px solid #000',
								':hover': {
									background: '#aaaaaa00',
									color: '#000',
								},
							}}>
							Continue with {item.provider}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
};
