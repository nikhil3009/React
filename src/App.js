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

const AppLayout = () => {
	const [userName, setUserName] = useState();
	useEffect(() => {
		const data = {
			name: 'SaiNikhilReddy',
		};
		setUserName(data.name);
	}, []);
	return (
		<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
			<div className='app'>
				<Header />
				<Outlet />
			</div>
		</UserContext.Provider>
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
		],
		errorElement: <Error />,
	},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
