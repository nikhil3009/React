/** @format */

import RestaurantCard from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { CORSPROXY, CDN_URL } from '../utils/constants';

const Body = () => {
	console.log('This is is cors issue', CORSPROXY, CDN_URL);

	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurant, setfilteredRestaurant] = useState([]);
	const [searchtext, setSearchtext] = useState('');
	const { loggedInUser, setUserName } = useContext(UserContext);

	console.log('Body rendered', listOfRestaurants);
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const data = await fetch(
			`${CORSPROXY}` +
				encodeURIComponent(
					`https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
				)
		);
		const json = await data.json();
		console.log(json);
		setListOfRestaurants(
			json?.data?.cards?.find(
				(card) =>
					card?.card?.card?.gridElements?.infoWithStyle?.restaurants !=
					undefined
			)?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setfilteredRestaurant(
			json?.data?.cards?.find(
				(card) =>
					card?.card?.card?.gridElements?.infoWithStyle?.restaurants !=
					undefined
			)?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	const onlineStatus = useOnlineStatus();
	if (onlineStatus === false) {
		return <h1>Please check your Internet connection!!! Thankyou</h1>;
	}

	if (!listOfRestaurants || listOfRestaurants.length === 0) {
		return <Shimmer />;
	}

	return (
		<div className='body '>
			<div className='filter flex'>
				<div className='m-4 p-4'>
					<input
						type='text'
						className='border-solid border-black'
						value={searchtext}
						onChange={(e) => {
							setSearchtext(e.target.value);
						}}></input>
					<button
						className='px-4 py-2 bg-green-100 m-4 items-center rounded-lg'
						onClick={() => {
							const filteredSearch = listOfRestaurants.filter((res) =>
								res.info.name.toLowerCase().includes(searchtext.toLowerCase())
							);
							setfilteredRestaurant(filteredSearch);
						}}>
						Search
					</button>
				</div>
				<div className='m-4 p-4 flex items-center '>
					<button
						className='px-4 py2 bg-blue-200 rounded-lg'
						onClick={() => {
							const fliteredList = listOfRestaurants.filter(
								(res) => res.info.avgRating > 4
							);
							setfilteredRestaurant(fliteredList);
						}}>
						Top Rated Restaurants
					</button>
				</div>
				<div className='m-4 p-4 flex items-center '>
					<label className='text-bold p-2'>UserName:</label>
					<input
						className='border border-black p-2'
						value={loggedInUser}
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
			</div>
			<div className='flex flex-wrap'>
				{filteredRestaurant.map((restaurant) => (
					<Link
						key={restaurant.info.id}
						to={'/restaurants/' + restaurant.info.id}>
						<RestaurantCard resData={restaurant} />
					</Link>
				))}
			</div>
		</div>
	);
};
export default Body;
