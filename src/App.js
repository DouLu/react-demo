import React from 'react';
import './App.css';
import { ThemeContext, themes } from './hooks/context';
import ContextDemo from './hooks/ContextDemo';




function App() {
  const [render, setRender] = React.useState(false);
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <button onClick={()=>{setRender(!render)}}>switch render</button>
      {render && <ContextDemo/>} 
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
