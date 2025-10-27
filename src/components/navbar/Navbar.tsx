"use client";
import React from "react";
import style from "./navbar.module.css"
import Link from "next/link";

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
           <Link href="/">Home</Link>
          </div>
          <div className={style.opciones}>
            <Link href="/dashboard">About me </Link>
          </div>
          <div className={style.opciones}>
            <Link href="/proyect">Projects</Link>
          </div>
          <div className={style.opciones}>
            <Link href="/myservices">Services</Link>
          </div>
          <div className={style.opciones}>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};
