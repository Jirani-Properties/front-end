import { Loader, Skeleton } from '@mantine/core';

export const CustomPlainSkeleton = ({ style }: { style?: any }) => {
	return (
		<div
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				width: '100%',
				display: 'flex',
				...(style ? style : {}),
			}}>
			<Skeleton sx={{ width: '100%', height: '100%' }} />
		</div>
	);
};

export const CustomLoader = ({ style }: { style?: any }) => {
	return (
		<div
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				width: '100%',
				display: 'flex',
				...(style ? style : {}),
			}}>
			<Loader
				// sx={{ width: '100%', height: '100%' }}
				variant={'bars'}
			/>
		</div>
	);
};
