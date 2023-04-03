import { MantineProvider } from '@mantine/core';

import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route,
} from 'react-router-dom';

import Property from './pages/Properties';
import Listing from './pages/Listings';
import Root from './pages/Root';

import './App.css';
import House from './pages/House';
import Page404 from './pages/404';
import Services from './pages/Services';
import DashboardLayout from './components/dashboard/Layout';
import Overview from './components/dashboard';
import DashboardProperty from './pages/dashboard/property';
import DashboardHouse from './pages/dashboard/House';
import Home from './pages/Home';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<Root />}>
					<Route index element={<Home />} />
					<Route path='/listings'>
						<Route index element={<Listing />} />
						<Route path='house/:id' element={<House />} />
						<Route path='*' element={<Page404 />} />
					</Route>

					<Route path='/dashboard' element={<Listing />} />
					<Route path='/services' element={<Services />} />
					<Route path='/features' element={<Listing />} />
					<Route path='/apartments' element={<Property />} />
					<Route path='/agent-finder' element={<Listing />} />
					<Route path='*' element={<Page404 />} />
				</Route>

				<Route path='/dashboard' element={<DashboardLayout />}>
					<Route index element={<Overview />} />
					<Route path='properties' element={<DashboardProperty />} />
					<Route path='properties/:id' element={<DashboardHouse />} />
					<Route path='*' element={<Page404 />} />
				</Route>
			</>
		)
	);
	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			// theme={{
			// 	breakpoints: {
			// 		xs: '30em',
			// 		sm: '48em',
			// 		md: '64em',
			// 		lg: '74em',
			// 		xl: '90em',
			// 	},
			// }}
		>
			<RouterProvider {...{ router }} />
		</MantineProvider>
	);
};

export default App;
