import HandLayout from "@/components/layouts/HandLayout/HandLayout";
import style from "./HomePage.module.scss";
import NavigationButton from "@/components/molecules/NavigationButton/NavigationButton";

const HomePage = () => {
  return (
    <div className={style.background}>
      <HandLayout>
        <h1 className="title">Who wants to be a millionaire?</h1>
        <NavigationButton route="/game">Start</NavigationButton>
      </HandLayout>
    </div>
  );
}
export default HomePage;