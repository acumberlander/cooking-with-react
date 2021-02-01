import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import CounterHook from './CounterHook';

export const ThemeContext = React.createContext();

function App() {
	const [theme, setTheme] = useState('red');

	const toggleTheme = () => {
		setTheme((prevThem) => {
			return prevThem === 'red' ? 'blue' : 'red';
		});
	};

	return (
		<ThemeContext.Provider value={{ backgroundColor: theme }}>
			Counter
			<Counter initialCount={0} />
			Counter Hook
			<CounterHook initialCount={0} />
			<button onClick={() => toggleTheme()}>Toggle Theme</button>
		</ThemeContext.Provider>
	);
}

export default App;
