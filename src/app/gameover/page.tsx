'use client'
import Button from '@/components/atoms/Button/Button';
import HandLayout from '@/components/layouts/HandLayout/HandLayout';
import style from "./page.module.scss";
import useLevel from '@/utils/hooks/useLevel';
import { useEffect } from 'react';

const GameOver = () => {
  const { currLevel, setCurrLevel } = useLevel();

  useEffect(()=>{
    return ()=>setCurrLevel({ index: 0, prize: 0 });
  }, [])

  return (
    <HandLayout>
      <div>
        <h4 className={style.subtitile}>Total score:</h4>
        <h1 className="title">${currLevel.prize} earned</h1>
      </div>
      <Button text="Try Again"/>
    </HandLayout>
  );
}

export default GameOver