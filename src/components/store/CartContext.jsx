import { createContext, useReducer } from "react"

const CartContext = createContext({
    // if there is no provider wrapper , default value will pass
    addItem:(item)=>{
        console.log(item)
    }
})


function cartRediucer(state,action){
    const existItemIndex=state.items.findIndex((item)=>item.id==action.item.id)
    let updateItems=[...state.items]
    let updateItem=updateItems[existItemIndex];
    switch (action.type) {
        case "addToCart":
            
            if(existItemIndex >-1){
                updateItem.qty++
                updateItems[existItemIndex]=updateItem;
            }else{
                updateItem={...action.item,"qty":1}
                updateItems=[...updateItems,updateItem]
                
            }
            console.log(updateItems)
            return {items:updateItems}
            break;
        case "removeCart":

                if(existItemIndex>-1){

                    if(updateItem.qty == 1){
                        updateItems.splice(existItemIndex,1)
                   } else{
                        updateItem.qty--;
              
                        updateItems[existItemIndex]=updateItem;
                   }
    
                }
               console.log(updateItems)
               return {items:updateItems}
             break;

        default:
            break;
    }
}


export  function CartContextProvider({children}){
     const [cart,dispatch]=useReducer(cartRediucer,{items:[]})
     

     function addItem(item){
            dispatch({
                type:"addToCart",
                item:item
            })
     }

     function removeItem(item){
        dispatch({
            type:"removeCart",
            item:item
        })
     }

     const cartContext={
        items:cart.items,
        addItem,
        removeItem,
     }
    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )
}



export default CartContext