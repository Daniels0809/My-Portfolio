import React from 'react'
import style from "./trayectCard.module.css"

interface TrayectCardProps {
    age: string;
    title: string;
    text: string; // Define any props if needed
}

export const TrayectCard = ({age, title, text}:TrayectCardProps) => {


  return (
    <>
        <div className={style.containerMiTrayectoria}>
            <div className={style.age}>{age}</div>
            <div className={style.title}><h2>{title}</h2></div>
            <div className={style.text}>{text}</div>
        </div>
    </>
  )
}
