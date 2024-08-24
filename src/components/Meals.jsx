
import { useContext, useEffect,useState } from "react";
import MealItem from "./mealItem";

  
export default function foods(){
    const [foods,setFoods]=useState([])
    async function fetchfoods(cat = ""){
        const res= await fetch(`http://localhost:3000/meals`)
        const data= await res.json()
        setFoods(data)
      }
    
    
  useEffect(()=>{   
    fetchfoods()
},[])
    return (

        <>

          <ul id="meals">
            {
              foods.map((meal)=><MealItem key={meal.id} meal={meal} />)
            }
          </ul>

         

        </>
        
    )
}