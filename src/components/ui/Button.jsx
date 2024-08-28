import { useContext, useState } from "react"
import ThemeContext from "../store/ThemeContext"

export default function Button({children,textOnly,className,onClick,...prop}){
    const {theme}=useContext(ThemeContext)
    let cssClasses = textOnly ?"text-button":"button"
    cssClasses+= " "+ className + " " +`color-${theme} button-${theme} `
    return (
        <button className={cssClasses} onClick={onClick} {...prop}>
             {children}
        </button>
    )
}