import { createContext, useState } from "react";

const ThemeContext = createContext("dark")



export function ThemeContextProvider({children}){

    const [theme,setTheme]=useState("dark")
    
    
    function changeTheme(){
        setTheme((prvTheme)=>prvTheme=="light" ? "dark":"light")
    }   



    const themeContext = {
        theme,
        changeTheme
    }

    return (
            <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>
    )
}


export default ThemeContext