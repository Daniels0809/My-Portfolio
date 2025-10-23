"use client";
import React from "react";
import style from "./navbar.module.css"

export const Navbar = () => {

      const handleClick = () => {
    console.log("se hizo click");
  };
  return (
    <>
      <div className={style.navBar}>
        <div>
          <div className={style.P}>Portfolio</div>
        </div>
        <div className={style.navigate}>
          <div className={style.opciones}>
            <button onClick={handleClick}>Inicio</button>
          </div>
          <div className={style.opciones}>
            <button onClick={handleClick}>Sobre Mí</button>
          </div>
          <div className={style.opciones}>
            <button onClick={handleClick}>Proyectos</button>
          </div>
          <div className={style.opciones}>
            <button onClick={handleClick}>Servicios</button>
          </div>
          <div className={style.opciones}>
            <button onClick={handleClick}>Contacto</button>
          </div>
        </div>
      </div>
    </>
  );
};
