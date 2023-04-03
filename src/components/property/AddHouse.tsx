import {
	Box,
	Button,
	Checkbox,
	FileButton,
	Group,
	MultiSelect,
	NumberInput,
	Select,
	Text,
	Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import FileWrapper from '../common/FileWrapper';
import ForSale from './ForSale';

const AddHouse = () => {
	const form = useForm({
		initialValues: {
			total_avalaible: null,
			additional_info: '',
			for_sale: false,
			category: '',
			photos: [],
			tags: [],
			cost: null,
		},

		validate: {
			photos: (value) =>
				value.length > 0 ? null : 'You must include some photos',

			tags: (value) => (value.length > 0 ? null : 'You must include some tags'),

			category: (value) => (value ? null : 'You must select a category'),
			cost: (value) =>
				value ? null : 'You must include the monthly rent/cost',

			additional_info: (value) =>
				value ? null : 'Include a brief description of the house',
			total_avalaible: (value) =>
				value ? null : 'You must specify total of this house available',
		},
	});

	const clearFile = () => form.setValues({ photos: [] });

	return (
		<Box
			{...{
				sx: { marginTop: '10px', padding: '0px' },
			}}>
			<form
				{...{
					onSubmit: form.onSubmit((values) => console.log(values)),
					style: { display: 'flex', flexDirection: 'column', gap: '8px' },
				}}>
				<NumberInput
					{...{
						...form.getInputProps('cost'),
						label: 'Monthly rent',
						withAsterisk: true,
						placeholder: 'Ksh.',
					}}
				/>

				<NumberInput
					{...{
						...form.getInputProps('total_avalaible'),
						placeholder: 'Count available',
						label: 'Total available',
						withAsterisk: true,
					}}
				/>

				<Select
					data={[]}
					{...{
						...form.getInputProps('category'),
						placeholder: 'Category',
						label: 'Category',
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

export default AddHouse;
