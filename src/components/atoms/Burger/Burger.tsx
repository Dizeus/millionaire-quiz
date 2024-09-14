"use client";
import Image from "next/image";
import burger from "@/assets/images/burger.svg";
import burgerClose from "@/assets/images/burger-close.svg";
import style from "./Burger.module.scss";

interface BurgerProps{
  setActive: (b: boolean)=>void,
  active: boolean
}
const Burger = ({ setActive, active}: BurgerProps) => {
  const image = active ? burgerClose : burger;

  return (
    <Image
      onClick={()=>setActive(!active)}
      className={style.burger}
      src={image}
      alt="menu"
      width={44}
      height={44}
    />
  );
};

export default Burger;
