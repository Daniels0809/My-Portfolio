"use client";
import { PasionCard } from "@/components/card/PasionCard";
import { TrayectCard } from "@/components/card/TrayectCard";
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
      <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 mb-0 gap-80 dashboardContainer">
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
        <div className="about grid md:grid-cols-2  gap-10  mb-16  ">
          <div className="containerHistoryPasiones">
            <div className=" p-5">
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
            <div className="blockTrayectoria block mis_pasiones p-5">
              <div className="text-amber-400 font-bold text-lxl m-3">
                Mis pasiones
              </div>
              <div className="blockPasiones text-gray-400">
                <div className=" mb-5 ml-2">
                  <PasionCard
                    icon={"🚀"}
                    text="Explorar nuevas tecnologías y tendencias en desarrollo web."
                  />
                </div>
                <div className="mb-5 ml-2">
                  <PasionCard
                    icon={"🎨"}
                    text="Diseñar interfaces de usuario atractivas y funcionales."
                  />
                </div>
                <div className="mb-5 ml-2">
                  <PasionCard
                    icon={"🌍"}
                    text="Conectar con comunidades globales de desarrolladores y
                    diseñadores."
                  />
                </div>
                <div className="mb-5 ml-2">
                  <PasionCard
                    icon={"📚"}
                    text="Aprender continuamente y compartir conocimientos con otros."  
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="trayectoria p-5">
            <div className="text-blue-500 font-bold text-xl p-2">
              Mi Trayectoria
            </div>
            <div className="cards-trayectoria text-gray-400">
              <div className="mb-5">
                <TrayectCard
                  age="2020"
                  title="Iniciando mi viaje en el desarrollo web"
                  text="Comencé mi aventura en el desarrollo web aprendiendo HTML, CSS y JavaScript. Creé mis primeros sitios web estáticos y me enamoré del poder de la web para conectar personas."
                />
              </div>
              <div className="mb-5">
                <TrayectCard
                  age="2022"
                  title="Convirtiéndome en desarrollador front-end"
                  text="Me especialicé en el desarrollo front-end, dominando frameworks como React y Vue.js. Empecé a construir interfaces de usuario interactivas y responsivas, mejorando la experiencia del usuario."
                />
              </div>
              <div className="mb-5">
                <TrayectCard
                  age="2024"
                  title="Explorando el desarrollo full-stack"
                  text="Amplié mis habilidades aprendiendo frameworks como React y Next.js para el front-end, y Node.js para el back-end. Empecé a construir aplicaciones web completas y dinámicas."
                />
              </div>
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
