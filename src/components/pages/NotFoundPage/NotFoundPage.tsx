import NavigationButton from "@/components/molecules/NavigationButton/NavigationButton";
import style from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <>
      <h2 className={style.text}>404 - Sorry this page wasn&apos;t found :(</h2>
      <NavigationButton route="/">Return to Home Page</NavigationButton>
    </>
  );
};

export default NotFoundPage;
