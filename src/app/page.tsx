"use client";
import { Button } from "@/components/button/Button";

export default function Home() {
  const handleClick = () => {
    console.log("se hizo click");
  };

  return (
    <>
      <div className="navBar">
        <div>
          <div className="P">Portfolio</div>
        </div>
        <div className="navigate">
          <div className="opciones"><button onClick={handleClick}>Inicio</button></div>
          <div className="opciones"><button onClick={handleClick}>Sobre Mí</button></div>
          <div className="opciones"><button onClick={handleClick}>Proyectos</button></div>
          <div className="opciones"><button onClick={handleClick}>Servicios</button></div>
          <div className="opciones"><button onClick={handleClick}>Contacto</button></div>
        </div>
      </div>
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
