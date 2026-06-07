"use client"
import {useState} from "react"

export default function Home() {

  const[count,setCount]=useState(100)
  return (
   <div className="bg-red-500 text-white p-8">
      <h1 className="text-3xl font-bold">NextMan 🚀</h1>
      <p className="text-lg">Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setCount(count-1)}>decrement</button>

    </div>
  );
}
