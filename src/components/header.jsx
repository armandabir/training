import { useContext } from "react"
import logo from "./../assets/logo.jpg"
import Button from "./ui/Button"
import CartContext from "./store/CartContext"
export default function Header(){

   const {items}=useContext(CartContext)
   const totalcart=items.reduce((totalnumber,item)=>{
      return totalnumber + item.qty;
   },0)
   return (
        <header id="main-header">
           <div id="title">
                <img src={logo} alt="" />
                <h1>Welcome</h1>                
           </div>
           <Button textOnly>{`card[${items.length}]`}</Button>
           <Button textOnly>{`cardTotal[${totalcart}]`}</Button>
        </header>
   ) 
}