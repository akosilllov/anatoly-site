"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import style from "./style.module.css";
import plus from "../../assets/icons/plus.png";
import minus2 from "../../assets/icons/minus2.png";

interface ToggleProps {
  text: string;
  children: ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ text, children }) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div className={style.block}>
      <div className={style.container} onClick={() => setIsActive(!isActive)}>
        <div className={style.text}>{text}</div>
        <div>
          <Image
            src={isActive ? minus2 : plus}
            height={isActive ? 15 : 23}
            width={isActive ? 15 : 23}
            alt="не удалось загрузить"
          />
        </div>
      </div>
      {isActive && children}
    </div>
  );
};

export default Toggle;
