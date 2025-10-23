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
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 dashboardContainer">
        <div className="">
            <h1>
            <span className="block span1">ABOUT</span>
            <span className="block span2">ME</span>  
             <p>
              Este es mi portafolio, Transformo ideas audaces en experiencias
              digitales únicas. Diseñador, desarrollador y aventurero que crea
              con pasión y sin límites.
            </p>
          </h1>
        </div>
        <div className="about flex gap-20">
            <div className="my_history">
              <div className="block context">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nulla, temporibus hic porro corrupti dolores quis esse illum, maiores, ullam amet suscipit provident sed ea qui? Distinctio repellat accusantium cumque.</div>
              <br />
              <div className="block mis_pasiones">
                <span className="block border-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt quam odit suscipit molestiae quisquam quidem voluptatibus, eveniet dolore aspernatur eos consequatur unde est ab atque eligendi nisi earum? Officiis.</span>
                <br />
                <span className="block border-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis at ipsum inventore dolores sint dolore esse, laborum voluptates, minus numquam ratione quidem excepturi placeat necessitatibus ex laboriosam nemo nobis temporibus.</span>
                <br />
                <span className="block border-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, voluptates dolores ipsa consequatur nisi reprehenderit, a reiciendis quisquam perferendis laudantium ratione consequuntur cum ipsam, hic sunt minima necessitatibus animi nostrum?</span>
                </div>
            </div>
            <div className="trayectoria">
              <div className="cards-trayectoria">
                <div>lider</div>
                <div>diseño</div>
                <div>certificacion</div>
              </div>
            </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Dashboard;


//  <h2>{count}</h2>
//       <button onClick={() => {setCount(count - 1)}} className="button">-1</button>
//       <button onClick={() => {setCount(0)}} className="button">reset</button>
//       <button onClick={handleCountPlus} className="button">+1</button>