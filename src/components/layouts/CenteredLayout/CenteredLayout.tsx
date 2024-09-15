import { PropsWithChildren } from "react";
import style from './CenteredLayout.module.scss'

const CenteredLayout = ({children}: PropsWithChildren) => {
  return (
    <div className={style.wrapper}>
      {children}
    </div>
  );
};

export default CenteredLayout;
