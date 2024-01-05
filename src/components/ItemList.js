/** @format */

import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
const ItemList = ({ items }) => {
	const dispatch = useDispatch();
	const handleAddItem = (item) => {
		dispatch(addItem(item));
	};
	return (
		<div>
			{items.map((item) => (
				<div
					key={item.card.info.id}
					className='p-2 m-2 border-gray-200 border-b-2 text-left'>
					<img
						src={CDN_URL + item.card.info.imageId}
						className='w-14 shadow-lg rounded-md'
					/>
					<div>
						<span className='py-2'> {item.card.info.name}</span>
						<span> - ₹{item.card.info.price / 100}</span>
					</div>
					<button
						onClick={() => handleAddItem(item)}
						className='bg-blue-300 shadow-md rounded-md p-2 cursor-pointer'>
						Add Item
					</button>
				</div>
			))}
		</div>
	);
};
export default ItemList;
