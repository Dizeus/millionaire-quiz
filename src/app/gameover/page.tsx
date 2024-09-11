import Button from '@/components/atoms/Button/Button';
import HandLayout from '@/components/layouts/HandLayout/HandLayout';
import style from "./page.module.scss";

const GameOver = () => {
  const amount = '8,000';
  return (
    <HandLayout>
      <div>
        <h4 className={style.subtitile}>Total score:</h4>
        <h1 className="title">${amount} earned</h1>
      </div>
      <Button text="Try Again" />
    </HandLayout>
  );
}

export default GameOver