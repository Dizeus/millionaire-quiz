import Image from "next/image";
import hand from "@/assets/images/hand.svg";
import { PropsWithChildren } from "react";
import style from "./HandLayout.module.scss";

const HandLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={style.container}>
      <div className={style["image-container"]}>
        <Image
          className={style.image}
          src={hand}
          alt="Well done hand"
          sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default HandLayout;
