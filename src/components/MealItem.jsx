
import { createContext, useContext } from "react"
import { currencyFormatter } from "../util/formating"
import Button from "./ui/Button"
import CartContext from "./store/CartContext"


export default function MealItem({meal}){
    const {addItem,removeItem}=useContext(CartContext)

    function handleAddItem(){
        // console.log("addItem")
        addItem(meal)
    }

    function handleRemoveItem(){
        console.log("remove")
        removeItem(meal)
    }
    return (
       <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt="" />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddItem}>Add to card</Button>
                    <Button onClick={handleRemoveItem}>remove from card</Button>
                </p>
            </article>
       </li>
    )
}