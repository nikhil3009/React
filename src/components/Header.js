/** @format */
import { useState, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
	const [loginBtn, setloginBtn] = useState('Login');
	const { loggedInUser } = useContext(UserContext);
	const cartItems = useSelector((store) => store.cart.items);
	return (
		<div className='flex justify-between bg-white shadow-lg mb-2 mt-2 mr-2 ml-2 px'>
			<div className='logo-container'>
				<img
					className='w-56'
					src={LOGO_URL}></img>
			</div>
			<div className='flex items-center'>
				<ul className='flex p-4 m-4'>
					<li className='px-4  bg-white font-bold'>
						<Link to='/'>Home </Link>
					</li>
					<li className='px-4 bg-white font-bold'>
						<Link to='/about'>About Us </Link>
					</li>
					<li className='px-4  bg-white font-bold'>
						<Link to='/contact'>Contact Us </Link>
					</li>
					<li className='px-4  bg-white font-bold cursor-pointer'>
						<Link to='/cart'> 🛒 ({cartItems.length})</Link>
					</li>
					<button
						className='login px-4  bg-white font-bold'
						onClick={() => {
							loginBtn === 'Login'
								? setloginBtn('Logout')
								: setloginBtn('Login');
						}}>
						{loginBtn}
					</button>
					<li className='px-4  bg-white font-bold'>{loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
