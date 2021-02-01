import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

const CounterHook = ({ initialCount }) => {
	const [count, setCount] = useState(initialCount);
	const style = useContext(ThemeContext);

	const increment = () => {
		setCount((prevState) => prevState + 1);
	};

	const decrement = () => {
		setCount((prevState) => prevState - 1);
	};

	return (
		<div>
			<button style={style} onClick={() => decrement()}>
				-
			</button>
			<span>{count}</span>
			<button style={style} onClick={() => increment()}>
				+
			</button>
		</div>
	);
};

export default CounterHook;
