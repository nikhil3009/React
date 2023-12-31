/** @format */
import { useRouteError } from 'react-router-dom';
const Error = () => {
	const err = useRouteError();
	console.log(err);
	return (
		<div>
			<h1>Opps!!!</h1>
			<h1>choose correct end point </h1>
			<h4>{err.statusText}</h4>
		</div>
	);
};
export default Error;
