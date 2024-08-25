import { useContext } from "react"
import ThemeContext from "../store/ThemeContext"

export default function Button({children,textOnly,className,...prop}){
    const {theme}=useContext(ThemeContext)
    let cssClasses = textOnly ?"text-button":"button"
    cssClasses+= " "+ className + " " +`color-${theme} button-${theme} `
    return (
        <button className={cssClasses} {...prop}>
             {children}
        </button>
    )
}