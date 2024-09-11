import HandLayout from "@/components/layouts/HandLayout/HandLayout";
import style from "./page.module.scss";
import Button from "@/components/atoms/Button/Button";

export default function Home() {
  return (
    <div className={style.background}>
      <HandLayout>
        <h1 className="title">
          Who wants to be a millionaire?
        </h1>
        <Button text="Start" />
      </HandLayout>
    </div>
  );
}
