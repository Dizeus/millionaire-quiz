import Button from "@/components/atoms/Button/Button";
import { ErrorProps } from "@/utils/types/props/ErrorProps";
import style from "./ErrorPage.module.scss";

const ErrorPage = ({ error, reset, text }: ErrorProps) => {
  return (
    <>
      <h2 className={style.message}>{text}</h2>
      <h3 className={style.error}>
        Error: <span>{error.message}</span>
      </h3>
      <Button handleOnClick={() => reset()}>Try Again</Button>
    </>
  );
};

export default ErrorPage;
