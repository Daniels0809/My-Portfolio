"use client"
import { notification } from "@/helpers/utils";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const  Dashboard = () => {
  const [count, setCount] = useState(0)


useEffect(() => {
  if(count < 0){
  notification("Numero negativo", "error")
  }
  if(count > 0){
  notification("Numero positivo", "success")
  }
}, [count])

  const handleCountPlus = () => {
    if(count < 15){
      setCount(count + 1)
    }else {
      notification("no se puede mas", "error")
    }

  }
  //menu tab

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => {setCount(count - 1)}} className="button">-1</button>
      <button onClick={() => {setCount(0)}} className="button">reset</button>
      <button onClick={handleCountPlus} className="button">+1</button>
      <ToastContainer />
    </>
  );
}

export default Dashboard;
