import { useContext } from "react"
import logo from "./../assets/logo.jpg"
import Button from "./ui/Button"
import CartContext from "./store/CartContext"
import ThemeContext from "./store/ThemeContext"
export default function Header({onClick}){
   const {theme,changeTheme}=useContext(ThemeContext)
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
           <Button onClick={onClick} textOnly>{`card[${items.length}]`}</Button>
           <Button textOnly>{`cardTotal[${totalcart}]`}</Button>
           <Button onClick={changeTheme}>{theme=="dark"?"light":"dark"}</Button>
        </header>
        
   ) 
}