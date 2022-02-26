import { useState } from 'react';
import { MyContext } from './context';
import ParentComponent from './ParentComponent';

const ContextDemo = () => {
	const [language, setLanguage] = useState('en');

	const changeLanguage = (value) => {
		setLanguage(value);
	};

	return (
		<MyContext.Provider
			value={{
				language,
				changeLanguage
			}}
		>
			<ParentComponent />
		</MyContext.Provider>
	);
};
export default ContextDemo;
