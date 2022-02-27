import { forwardRef, useImperativeHandle, useState } from 'react';

const RefDemo = forwardRef((props, ref) => {
	const [count, setCount] = useState(0);

	const setData = () => {
		setCount(count + 1);
	};

	const reset = () => {
		setCount(0);
	};

	useImperativeHandle(ref, () => ({
		setData,
		reset
	}));

	return (
		<div>
			<h1>RefDemo</h1>
			<p>{count}</p>
		</div>
	);
});
export default RefDemo;
