import { useState } from "react"
import Card from "./components/Card"
import { useEffect } from "react"
import { Result } from "postcss"
function App() {
  const [posts,setPosts]=useState([])
  const [toggle,setToggle]=useState(false)
  async function fechposts(id="") {
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data= await res.json()
  
    if(data.length > 1){

      setPosts(data)
    }else{
      setPosts([data])
    }
  }
  useEffect(function(){

    // fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json().then((res)=>setPosts(res)))
   

    fechposts()
  },[toggle])

  return (
    <>
    {
     posts.map((post)=><div>{post.title}</div>)
    }
      <Card/>
      <button  onClick={()=>setToggle(!toggle)}>fetch</button>
      <button onClick={()=>fechposts(1)}>API 1</button>
    </>
  )
}

export default App
