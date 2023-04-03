import { ChildPropInterface } from '../../types';

type imgCacheInterface = {
	__cache: {
		[key: string]: any;
	};
	read: (src: string) => void | string;
	clearImg?: (src: string) => null | boolean;
};

const imgCache: imgCacheInterface = {
	__cache: {},
	read(src: string) {
		if (!src) return;

		if (!this.__cache[src]) {
			this.__cache[src] = new Promise((resolve) => {
				const img = new Image();
				img.onload = () => {
					this.__cache[src] = true;
					resolve(this.__cache[src]);
				};
				img.src = src;
				setTimeout(() => resolve({}), 7000);
			}).then((img) => {
				this.__cache[src] = true;
			});
		}

		if (this.__cache[src] instanceof Promise) throw this.__cache[src];

		return this.__cache[src];
	},
	// //@ts-ignore
	// clearImg: (src: string) => (this ? delete this.__cache[src] : null),
};

export const LazyImage = ({ src, style }: { src: string; style: any }) => {
	imgCache.read(src);

	return (
		<img
			{...{
				loading: 'lazy',
				alt: 'img',
				style,
				src,
			}}
		/>
	);
};

export const LazyBGImage = ({
	children,
	src,
	style,
}: {
	src: string;
	style: any;
} & Partial<ChildPropInterface>) => {
	imgCache.read(src);
	{
		/* <BackgroundImage
			{...{
				sx: style,
				alt: 'img',
				src,
			}}>
			{children}
		</BackgroundImage> */
	}
	return (
		<div
			{...{
				style: {
					...style,
					position: 'relative',
				},
			}}>
			<img
				{...{
					style: {
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '0px',
						top: '0px',
					},
					loading: 'lazy',
					src,
				}}
			/>
			{children}
		</div>
	);
};
