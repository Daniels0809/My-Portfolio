"use client";
import { Button } from "@/components/button/Button";

export default function Home() {


  return (
    <>

      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 hero">
        
        <div className="contenido">
          <h1>
            <span className="block span1">DESARROLLADOR </span>
            <span className="block span2">WEB</span>
          </h1>
          <div>
            <p>
              Este es mi portafolio, Transformo ideas audaces en experiencias
              digitales únicas. Diseñador, desarrollador y aventurero que crea
              con pasión y sin límites.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

//<Button onClick={handleClick} label="Click" />
