import React, { useRef } from 'react';
import './App.css';
import { ThemeContext, themes } from './hooks/context';
import ContextDemo from './hooks/ContextDemo';
import ReducerDemo from './hooks/ReducerDemo';
import RefDemo from './hooks/RefDemo';

function App() {
	const [render, setRender] = React.useState(false);
	const ref: React.Ref<any> = useRef(null);

	return (
		<div className="App">
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
					<div>
						<RefDemo ref={ref} />
						<button
							onClick={() => {
								ref.current.setData();
							}}
						>
							setData
						</button>
						<button
							onClick={() => {
								ref.current.reset();
							}}
						>
							reset
						</button>
					</div>
				</div>
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
