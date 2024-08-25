import Header from "./components/header";
import Meals from "./components/Meals"
import { CartContextProvider } from "./components/store/CartContext";
import { ThemeContextProvider } from "./components/store/ThemeContext";
function App() {
  return (
    <>
    <ThemeContextProvider>
      <CartContextProvider>
        <Header/>
        <Meals/>
      </CartContextProvider>
    </ThemeContextProvider>
    </>
  );
}

export default App;
