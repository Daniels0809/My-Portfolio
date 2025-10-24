import React, { JSX } from 'react'
import style from "./pasionCard.module.css"

interface PasionCardProps {
    icon: JSX.Element |string;
    text: string;
}

export const PasionCard = ({icon, text}:PasionCardProps) => {

  return (
    <>
        <div className={style.pasionCardContainer}>
            <div className={style.icon}>{icon}</div>
            <div className={style.text}>{text}</div>
        </div>
    </>
  )
}
