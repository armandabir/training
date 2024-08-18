
import { useContext } from "react"
import { ThemeContext } from "../../App";
import "./../styles/card.css"
export default function Card({title,price,image}){
    const theme=useContext(ThemeContext)
    return (
        <div className={`card-bg-${theme}`}>
            <h3>{title}</h3>
            <p>{price}</p>
            <img src={image} alt="" />
        </div>
    )
}