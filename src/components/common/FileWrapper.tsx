import { Accordion, BackgroundImage, rem } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

const FileWrapper = ({ files }: { files: File[] }) => {
	return (
		<div style={{ width: '100%' }}>
			<Accordion variant='contained'>
				<Accordion.Item value='photos'>
					<Accordion.Control icon={<IconPhoto size={rem(20)} color='red' />}>
						Preview Images ({files.length})
					</Accordion.Control>
					<Accordion.Panel>
						<div
							style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
							{files.map((file, key) => (
								<BackgroundImage
									{...{
										src: URL.createObjectURL(file),
										component: 'div',
										sx: {
											justifyContent: 'flex-end',
											alignContent: 'flex-end',
											flexDirection: 'column',
											alignItems: 'center',
											borderRadius: '10px',
											objectFit: 'contain',
											height: '40vh',
											width: '100%',
											display: 'flex',
										},
									}}
									key={key}
								/>
							))}
						</div>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default FileWrapper;
