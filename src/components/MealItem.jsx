
import { createContext, useContext } from "react"
import { currencyFormatter } from "../util/formating"
import Button from "./ui/Button"
import CartContext from "./store/CartContext"
import ThemeContext from "./store/ThemeContext"


export default function MealItem({meal}){
    const {addItem,removeItem}=useContext(CartContext)
    const {theme}=useContext(ThemeContext)
    function handleAddItem(){
        // console.log("addItem")
        addItem(meal)
    }

    function handleRemoveItem(){
        console.log("remove")
        removeItem(meal)
    }
    return (
       <li className={`meal-item ${theme}`}>
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt="" />
                <div>
                    <h3 className={`${theme}-text`}>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className={`meal-item-description ${theme}-text`}>{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddItem}>Add to card</Button>
                    <Button onClick={handleRemoveItem}>remove from card</Button>
                </p>
            </article>
       </li>
    )
}