export const Tag = ({
	color,
	content,
	Icon,
}: {
	content: string;
	color: string[];
	Icon?: any;
}) => {
	return (
		<div
			style={{
				justifyContent: 'center',
				alignContent: 'center',
				background: color[0],
				alignItems: 'center',
				borderRadius: '20px',
				padding: '4px 16px',
				color: color[1],
				display: 'flex',
				gap: '2px',
			}}>
			{Icon ? (
				<Icon size={'1rem'} style={{ color: '#fff', fill: '#fff' }} />
			) : null}

			{content}
		</div>
	);
};
