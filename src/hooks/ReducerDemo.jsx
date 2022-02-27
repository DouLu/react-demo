import { useReducer } from 'react';
import { loginReducer } from './reducer';

const init = (initValue) => ({
	...initValue
});

const ReducerDemo = (props) => {
	const { initValue = {} } = props;
	const [login, loginDispatch] = useReducer(loginReducer, initValue, init);
	return (
		<div>
			<h1>ReducerDemo</h1>
			<button
				onClick={() => {
					loginDispatch({
						type: 'login',
						payload: { username: 'admin', password: '123456', expire: false }
					});
				}}
			>
				login
			</button>
			<button
				onClick={() => {
					loginDispatch({
						type: 'login',
						payload: { expire: true, username: '', password: '' }
					});
				}}
			>
				expire
			</button>
			{login.expire && <p>user is expired, please login again.</p>}
			<p>username :{login.username}</p>
			<p>password :{login.password}</p>
		</div>
	);
};

export default ReducerDemo;
