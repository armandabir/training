import pizza from "./../../assets/special-pizza.png"
import "../styles/home.scss"
import { useContext } from "react"
import { ThemeContext } from "../../App"

export default function Home(){
    const theme = useContext(ThemeContext)
    return(
 
        <>
         <h1 className={`title-${theme}`}>رستوران آرمان</h1>
         <div className="img-container">
             <img src={pizza} alt="" />
         </div>
        </>
         
    )

}