import { Dispatch, ReactNode, SetStateAction } from 'react';

// common shared interfaces
export type ChildPropInterface = {
	children: ReactNode;
};

export type titleInterface = {
	title: string;
};

export interface formPropInterface {
	form: any;
}

// components interface

export interface navLinksInterface {
	setOpened?: Dispatch<SetStateAction<boolean>>;
	in_footer: boolean;
	in_nav: boolean;
	href: string;
	label: string;
}

export interface userModalInterface extends authLinksInterface {}

export interface authLinksInterface {
	setOpened?: Dispatch<SetStateAction<boolean>>;
	modalOpened: boolean;
	open: () => void;
	close: () => void;
}

export type customAuthLinksInterface = {
	openPhoneInput: () => void;
} & Omit<authLinksInterface, 'setOpened'>;

export interface layoutInterface extends ChildPropInterface {}

export interface userInterface {
	first_name: string;
	last_name: string;
	phone: string;
	exp?: number;
	role?: string;
	iat?: number;
	uid: string;
}

export enum roleInterface {
	Landlord = 'Landlord',
	Admin = 'Admin',
	USER = 'User',
}
export interface reviewInterface {
	date_created: string;
	review: string;
	rating: number;
	id: string;
	owner: {
		first_name: string;
		last_name: string;
		uid: string;
	};
}

export interface categoryInterface {
	added_on: string;
	name: string;
	id: string;
}
interface baseCardInterface<Y> {
	url: string;
	tags: Y[];
}
export interface tagsInterface {
	tag: string;
	id: string;
}

interface onClickInterface {
	url: string;
}

export interface propertyInterface<T, Y> extends baseCardInterface<Y> {
	houses?: houseInterface<categoryInterface, tagsInterface, string, string>[];
	onClick: ({ url }: onClickInterface) => any;
	review: reviewInterface[];
	owner: userInterface;
	additional_info: string;
	nearest_town: string;
	year_built: number;
	for_sale: boolean;
	land_size: string;
	location: string;
	cost?: number;
	name: string;
	photos: T[];
	id: string;
}

export interface houseInterface<T, X, P, PP> extends baseCardInterface<X> {
	property: propertyInterface<PP, tagsInterface>;
	onClick: ({ url }: onClickInterface) => any;
	additional_info: string | null;
	total_available: number;
	date_updated: string;
	date_added: string;
	for_sale: boolean;
	cost: number;
	category: T;
	photos: P[];
	id: string;
}
export interface houseModalInterface {
	house:
		| houseInterface<categoryInterface | null, tagsInterface, string, string>
		| undefined;
	setCurrentHouseSelected: Dispatch<
		SetStateAction<
			| houseInterface<categoryInterface | null, tagsInterface, string, string>
			| undefined
		>
	>;
	modalOpened: boolean;
	close: () => void;
}

export interface landlordComponentInterfac {
	setLandlordInfo: Dispatch<Partial<landLordSignup>>;
	landlordInfo: landLordSignup;
}
export interface signUpUserInfoInterface {
	email_addr: string;
	is_landlord: boolean;
	password: string;
	phone: string;
}

export interface signUpError {
	field: string;
	msg: string;
}
export type finderUtilFuncInterface = {
	field: string;
} & Pick<errorType<signUpError>, 'data'>;

export interface baseUserInterface {
	setUserInfo: Dispatch<Partial<signUpUserInfoInterface>>;
	findError: ({ field, data }: finderUtilFuncInterface) => any;
	errors: errorType<signUpError>;
	userInfo: any;
}

export interface landLordSignup {
	first_name: string;
	last_name: string;
	kra_pin: string;
	id_no: string;
}

export interface authUser {
	refreshToken: string;
	accessToken: string;
}

export interface signInUserInfoInterface
	extends Pick<signUpUserInfoInterface, 'password' | 'phone'> {}

export interface errorType<T extends signUpError> {
	status: number;
	details?: string;
	title: string;
	type: string;
	data?: T[];
}

export interface briefInterface {
	location: string;
	name: string;
}

export interface downloadProviderInterface {
	title: string;
	Icon?: any;
}
export interface paymentProviderInterface extends downloadProviderInterface {}

export interface dynamicParamsInterface {
	params: { id: string };
	searchParams: any;
}

export interface standardResponsePayload<T> {
	count: number;
	data: T[];
}

// component types
export interface baseComponent {}
// DashboardNavbar;
export interface DashboardNavbarLinksInterface {
	label: string;
	icon: any;
	to: string;
}

// requests types
export interface searchOptionsInterface {
	cost: { min: number; max: number };
	for_sale: boolean | 'All';
	category: string;
	location: string;
	order: string;
	page?: number;
	limit?: number;
}

// utils types
export type HeaderLinksInterface = {
	href: string;
	label: string;
};
