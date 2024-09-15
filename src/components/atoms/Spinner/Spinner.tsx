import style from "./Spinner.module.scss";
import spinner from "@/assets/images/spinner.svg";
import Image from "next/image";

const Spinner = () => {
  return (
    <Image
      className={style.spinner}
      src={spinner}
      alt="Well done hand"
      sizes="(max-width: 768px) 70vw, (max-width: 1200px)
      50vw, 33vw"
      style={{ objectFit: "contain" }}
    />
  );
};

export default Spinner;
