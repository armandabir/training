import { useState } from "react";
import Header from "./components/header";
import Meals from "./components/Meals"
import { CartContextProvider } from "./components/store/CartContext";
import CartModal from "./components/store/CartModal";
import { ThemeContextProvider } from "./components/store/ThemeContext";
function App() {
  const [showCart,setShowCart]=useState();
  const [showCheck,setShowCheck]=useState()
  
  function handleClick(){
      setShowCart((prvShowCart)=>!prvShowCart)
  }

  function handleOnCheck(){
    setShowCart(false)
    setShowCheck((prvCheck)=>!prvCheck)
  }
  return (
    <>
    <ThemeContextProvider>
      <CartContextProvider>
        <Header  onClick={handleClick}/>
        <Meals/>
        {showCart && (<CartModal onClose={handleClick} onCheck={handleOnCheck}/>)}
        
      </CartContextProvider>
    </ThemeContextProvider>
    </>
  );
}

export default App;
