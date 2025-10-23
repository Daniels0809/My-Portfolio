"use client";
import { notification } from "@/helpers/utils";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 0) {
      notification("Numero negativo", "error");
    }
    if (count > 0) {
      notification("Numero positivo", "success");
    }
  }, [count]);

  const handleCountPlus = () => {
    if (count < 15) {
      setCount(count + 1);
    } else {
      notification("no se puede mas", "error");
    }
  };
  //menu tab

  return (
    <>
      <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-80  dashboardContainer">
        <div className="container1">
          <div className="titleDashboard">
            <h1>
              <span className="block span1 mb-10">ABOUT ME</span>
            </h1>
          </div>
          <div>
            <p className="text-gray-400">
              Este es mi portafolio, Transformo ideas audaces en experiencias
              digitales únicas. Diseñador, desarrollador y aventurero que crea
              con pasión y sin límites.
            </p>
          </div>
        </div>
        <div className="about flex gap-20  m-3">
          <div className="containerHistoryPasiones">
            <div className="border-2 p-5">
              {" "}
              <div className="block context m-3  text-blue-500 font-bold text-xl">
                Mi historia
              </div>
              <div className="text-gray-400">
                <p>
                  Soy un profesional creativo con una sed insaciable de
                  conocimiento y una disposición natural para tomar riesgos
                  calculados.
                </p>
                <br />
                <p>
                  Mi enfoque combina diseño vanguardista, desarrollo técnico
                  sólido y una visión estratégica única. Cada proyecto es una
                  aventura donde transformo ideas audaces en experiencias
                  digitales memorables que conectan emocionalmente con las
                  personas.
                </p>
              </div>
            </div>
            <br />
            <div className="block mis_pasiones border-2 p-5">
              <div className="text-blue-500 font-bold text-xl ">
                Mis pasiones
              </div>
              <div className="text-gray-400">
                <span className="block border-2 m-3">card1</span>
                <br />
                <span className="block border-2 m-3">card2</span>
                <br />
                <span className="block border-2 m-3">card3</span>
              </div>
            </div>
          </div>
          <div className="trayectoria border-2 p-5">
            <div className="text-blue-500 font-bold text-xl ">Trayectoria</div>
            <div className="cards-trayectoria text-gray-400">
              <div>lider-card1</div>
              <div>diseño-card2</div>
              <div>certificacion-card3</div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;

//  <h2>{count}</h2>
//       <button onClick={() => {setCount(count - 1)}} className="button">-1</button>
//       <button onClick={() => {setCount(0)}} className="button">reset</button>
//       <button onClick={handleCountPlus} className="button">+1</button>
