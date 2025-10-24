import style from "./trayectCard.module.css"
import Image from 'next/image';

interface TrayectCardProps {
    age: string;
    title: string;
    text: string;
    icon?: React.ReactNode;
}

export const TrayectCard = ({age, title, text, img}:TrayectCardProps) => {


  return (
    <>
    <div className='flex border-l-1 border-amber-300'>
      <div className='imagen m-0 pl-0'>
        <Image
        alt=''
        src={img}
        width={10}
        height={10}
        />
        {img}
      </div>
        <div className={style.containerMiTrayectoria}>
            <div className={style.age}>{age}</div>
            <div className={style.title}><h2>{title}</h2></div>
            <div className={style.text}>{text}</div>
        </div>
    </div>
    </>
  )
}
