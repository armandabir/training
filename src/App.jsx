import { createContext, useEffect, useState } from "react"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Card from "./componenets/UI/Card"
import Home from "./componenets/pages/Home";
import Foods from "./componenets/pages/Foods";

export const ThemeContext=createContext(null);
function App() {

  const [theme, setTheme] = useState('light');


  function onThemeSet(){
    setTheme((prevThem)=>prevThem=="dark"?"light":"dark")
  }
  return (
    
     <ThemeContext.Provider value={theme}>
        <div>
          <button onClick={onThemeSet}>dark</button>
       </div>

      <BrowserRouter>
      
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/menu">menu</Link>
            </li>
          </ul>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/menu" element={<Foods/>}/>
          </Routes>
      </BrowserRouter>
     

      </ThemeContext.Provider>
  )
}

export default App
