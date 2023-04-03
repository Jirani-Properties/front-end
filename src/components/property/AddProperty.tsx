import {
	Box,
	Button,
	Checkbox,
	FileButton,
	Group,
	MultiSelect,
	Text,
	Textarea,
	TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import FileWrapper from '../common/FileWrapper';
import ForSale from './ForSale';

const AddProperty = () => {
	const form = useForm({
		initialValues: {
			property_name: '',
			nearest_town: '',
			additional_info: '',
			for_sale: false,
			photos: [],
			tags: [],
		},

		validate: {
			property_name: (value) =>
				/^\S+(\s\S+)?$/.test(value) ? null : 'Invalid property name provided',

			nearest_town: (value) =>
				/^\S+(\s\S+)?$/.test(value) ? null : 'Invalid property name provided',
		},
	});

	const clearFile = () => form.setValues({ photos: [] });

	return (
		<Box
			{...{
				sx: { marginTop: '10px', padding: '0px' },
				// maw: '100%',
				// mx: 'auto',
			}}>
			<form
				{...{
					onSubmit: form.onSubmit((values) => console.log(values)),
					style: { display: 'flex', flexDirection: 'column', gap: '8px' },
				}}>
				<TextInput
					{...{
						...form.getInputProps('property_name'),
						placeholder: 'Texas apartment',
						label: 'Property name',
						withAsterisk: true,
					}}
				/>

				<TextInput
					{...{
						...form.getInputProps('nearest_town'),
						placeholder: 'Nearest town',
						label: 'Nearest town',
						withAsterisk: true,
					}}
				/>

				<TextInput
					{...{
						...form.getInputProps('nearest_town'),
						placeholder: '2 ha',
						label: 'Land size',
						withAsterisk: true,
					}}
				/>

				<MultiSelect
					data={[]}
					{...{
						...form.getInputProps('tags'),
						placeholder: 'Features',
						label: 'Features',
						withAsterisk: true,
					}}
				/>

				{form.values.photos.length > 0 ? (
					<FileWrapper {...{ files: form.values.photos }} />
				) : null}

				<Group>
					<FileButton
						{...{
							accept: 'image/png,image/jpeg',
							...form.getInputProps('photos'),
							multiple: true,
						}}>
						{(props) => <Button {...props}>Upload images</Button>}
					</FileButton>

					{form.values.photos.length > 0 ? (
						<Button color='red' onClick={clearFile}>
							Clear Imgs
						</Button>
					) : null}
				</Group>

				<div style={{}}>
					<Textarea
						{...{
							...form.getInputProps('additional_info'),
							mb: 'xs',
							label: (
								<Text size='md' weight={700}>
									Additional Information:
								</Text>
							),
						}}
					/>
				</div>

				<Checkbox
					{...{
						...form.getInputProps('for_sale', { type: 'checkbox' }),
						label: 'For Sale?',
						mt: 'md',
						sx: {
							userSelect: 'none',
						},
					}}
				/>

				{form.values.for_sale ? <ForSale {...{ form }} /> : null}

				<Group position={'right'} mt='md'>
					<Button type='submit'>Proceed</Button>
				</Group>
			</form>
		</Box>
	);
};

export default AddProperty;
