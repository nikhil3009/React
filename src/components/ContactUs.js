/** @format */

const ContactUs = () => {
	return (
		<div className='font-bold text-3xl p-4 m-4'>
			<h1>This is sainikhilreddy</h1>

			<form>
				<input
					className='border border-black m-2'
					type='text'
					placeholder='name'></input>
				<input
					className='border border-black m-2'
					type='text'
					placeholder='message'></input>
				<button className='border border-black bg-blue-50 shadow-xl rounded-sm m-2'>
					Submit
				</button>
			</form>
		</div>
	);
};
export default ContactUs;
