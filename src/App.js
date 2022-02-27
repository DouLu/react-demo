import React from 'react';
import './App.css';
import { ThemeContext, themes } from './hooks/context';
import ContextDemo from './hooks/ContextDemo';
import ReducerDemo from './hooks/ReducerDemo';

function App() {
	const [render, setRender] = React.useState(false);
	return (
		<ThemeContext.Provider value={themes.dark}>
			<div className="App">
				<button
					onClick={() => {
						setRender(!render);
					}}
				>
					switch render
				</button>
				{render ? <ContextDemo /> : <ReducerDemo />}
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
