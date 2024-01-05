/** @format */

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

const AppLayout = () => {
	const [userName, setUserName] = useState();
	useEffect(() => {
		const data = {
			name: 'SaiNikhilReddy',
		};
		setUserName(data.name);
	}, []);
	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
				<div className='app'>
					<Header />
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};
const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <ContactUs />,
			},
			{
				path: '/',
				element: <Body />,
			},
			{
				path: '/restaurants/:resId',
				element: <RestaurantMenu />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
		],
		errorElement: <Error />,
	},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
