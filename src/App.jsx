import Header from "./components/header";
import Meals from "./components/Meals"
import { CartContextProvider } from "./components/store/CartContext";
function App() {
  return (
    <>
    <CartContextProvider>
      <Header/>
      <Meals/>
    </CartContextProvider>
    </>
  );
}

export default App;
