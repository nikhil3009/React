/** @format */

import { useState, useEffect } from 'react';
import { MENU_URL } from '../utils/constants';
const useRestaurantMenu = (resId) => {
	const [resInfo, setresInfo] = useState(null);
	useEffect(() => {
		fetchMenu();
	}, []);
	const fetchMenu = async () => {
		const data = await fetch(MENU_URL + resId);
		const json = await data.json();
		console.log(json);
		setresInfo(json.data);
	};
	return resInfo;
};
export default useRestaurantMenu;
