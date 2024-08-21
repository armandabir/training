import Card from "../UI/Card";
import { useContext, useEffect,useState } from "react";

import "./../styles/menu.scss"
import { ThemeContext } from "../../App";

  
export default function foods(){
    const [foods,setFoods]=useState([])
    const theme=useContext(ThemeContext)
    async function fetchfoods(cat = ""){
        const res= await fetch(`http://localhost:3131/foods/${cat}`)
        const data= await res.json()
        setFoods(data)
      }
    
    
  useEffect(()=>{   
    fetchfoods()
},[])
    return (

        <>
          <div className="bt-container">
            <button onClick={()=>fetchfoods("Pizzas")} className={`bt-${theme}`}>Pizzas</button>
            <button onClick={()=>fetchfoods("Burgers")} className={`bt-${theme}`}>Burgers</button>
            <button onClick={()=>fetchfoods("Drinks")} className={`bt-${theme}`}>Drinks</button>
          </div>
      
          <div className="foods-container">
            {
              foods.map((food)=><Card key={food.id} title={food.name} price={food.price} image={food.image} />)
            }
          </div>

         

        </>
        
    )
}