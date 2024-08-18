import Card from "../UI/Card";
import { useEffect,useState } from "react";



  
export default function foods(){
    const [foods,setFoods]=useState([])

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

          <button onClick={()=>fetchfoods("Pizzas")}>Pizzas</button>
          <button onClick={()=>fetchfoods("Burgers")}>Burgers</button>
          <button onClick={()=>fetchfoods("Drinks")}>Drinks</button>
         {
            foods.map((food)=><Card key={food.id} title={food.name} price={food.price} image={food.image} />)
          }

         

        </>
        
    )
}