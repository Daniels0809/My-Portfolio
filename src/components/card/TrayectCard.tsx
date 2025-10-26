import style from "./trayectCard.module.css";
import Image from "next/image";

interface TrayectCardProps {
  age: string;
  title: string;
  text: string;
  icon?: string;
}

export const TrayectCard = ({ age, title, text, icon }: TrayectCardProps) => {
  return (
    <>
      <div className="flex border-l-1 border-amber-300">
        <div className={style.containerMiTrayectoria}>
          {icon && (
            <div className="relative w-full flex items-center justify-center">
              <Image 
              src={icon as string} 
              alt="" 
              width={400} 
              height={400} 
              className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-98"/>
            </div>
          )}
          <div className={style.age}>{age}</div>
          <div className={style.title}>
            <h2>{title}</h2>
          </div>
          <div className={style.text}>{text}</div>
        </div>
      </div>
    </>
  );
};
