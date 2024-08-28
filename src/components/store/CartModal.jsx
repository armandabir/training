import { useContext } from "react";
import Button from "../ui/Button";
import CartContext from "./CartContext";

export default function CartModal({onClose,onCheck}){
    const {items,addItem,removeItem}=useContext(CartContext)
    const totalPrices=items.reduce((totalPrice,item)=>{
        return totalPrice + (item.qty*item.price)
    },0)
    function handleAddItem(item){
        addItem(item)
    }
    function handleRemoveItem(item){
        removeItem(item)
    }
    return (
        <div className="modal">
            <div className="cart">
                <h2>Your Cart</h2>
                    <ul>
                       {items.map((item)=>
                    
                        <li key={item.id}>
                            <div className="cart-item">
                                <p>{`${item.name}-${item.qty}x $${item.price}`}</p>
                                <div className="cart-item-actions">
                                    <button onClick={()=>handleRemoveItem(item)}>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={()=>handleAddItem(item)}>+</button>
                                </div>
                            </div>
                        </li>
                    )}
                    </ul>
                <div className="cart-total">{`${totalPrices.toFixed(2)}$`}</div>
            </div>
            <div className="modal-actions">
                <Button onClick={onClose} className="text-button" textOnly>close</Button>
                <Button onClick={onCheck} >Go to check out</Button>
            </div>
        
        </div>

    )
}