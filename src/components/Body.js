/** @format */

import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurant, setfilteredRestaurant] = useState([]);
	const [searchtext, setSearchtext] = useState('');
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
		);
		const json = await data.json();
		console.log(json);
		setListOfRestaurants(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setfilteredRestaurant(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
		<div className='body'>
			<div className='filter'>
				<div className='search'>
					<input
						type='text'
						className='search-box'
						value={searchtext}
						onChange={(e) => {
							setSearchtext(e.target.value);
						}}></input>
					<button
						onClick={() => {
							const filteredSearch = listOfRestaurants.filter((res) =>
								res.info.name.toLowerCase().includes(searchtext.toLowerCase())
							);
							setfilteredRestaurant(filteredSearch);
						}}>
						Search
					</button>
				</div>
				<button
					className='filter-btn'
					onClick={() => {
						const fliteredList = listOfRestaurants.filter(
							(res) => res.info.avgRating > 4
						);
						setfilteredRestaurant(fliteredList);
					}}>
					Top Rated Restaurants
				</button>
			</div>
			<div className='res-container'>
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
