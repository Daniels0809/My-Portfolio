import React, { JSX } from 'react'

import style from "./button.module.css"


interface ButtonProps {
    label: string,
    onClick: () => void,
    icon?: JSX.Element | string
}


export const Button = ({label, onClick, icon}: ButtonProps) => {
  return (
    <button className={style.miButton} onClick={onClick}>
        <div>{label}</div>
        <div>{icon}</div>
    </button>
  )
}
