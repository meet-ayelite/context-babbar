import { createContext, useState } from "react";
import ChildA from "./components/ChildA";
import './App.css'
// step1 : Create context
// const UserContext = createContext()
// step2: wrap in provider 
// step3: pass value in provide
	
const ThemeContext = createContext()

function App() {

  const [theme, setTheme] = useState('light')


  return (
    <>
		<ThemeContext.Provider value={{theme,setTheme}}>
			<div className="container" style={{backgroundColor:theme==='light'?'white':'black'}}>
				<ChildA/>
			</div>
		</ThemeContext.Provider>
    </>
  );
}

export default App;
export {ThemeContext}
