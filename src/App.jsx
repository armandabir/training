import { createContext, useEffect, useState } from "react"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Card from "./componenets/UI/Card"
import Home from "./componenets/pages/Home";
import Foods from "./componenets/pages/Foods";
import "./app.scss"
import "./../font-awesome-4.7.0/scss/font-awesome.scss"
import background from "./assets/hero.jpg"
export const ThemeContext=createContext(null);
function App() {

  const [theme, setTheme] = useState('light');


  function onThemeSet(){
    setTheme((prevThem)=>prevThem=="dark"?"light":"dark")
  }
  return (
      <main>
          <ThemeContext.Provider value={theme}>
            
            <BrowserRouter>
            
                <ul className={`navbar navbar-${theme}`}>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/menu">menu</Link>
                  </li>

                  <button onClick={onThemeSet}>{theme=="light"?<i class="fa fa-moon-o" aria-hidden="true"></i>:<i class="fa fa-sun-o" aria-hidden="true"></i>}</button>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/menu" element={<Foods/>}/>
                </Routes>
            </BrowserRouter>
              <div className="bg-grid"></div>
              <div className={`bg-rainbow-${theme}`}></div>

            </ThemeContext.Provider>
      </main>

  )
}

export default App
