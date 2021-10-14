import { useState } from "react";

export const useAnimation = () => {
  const [spin, setSpin] = useState(0);

  const [backgroundColor, setBackgroundColor] = useState('rgb(233, 123, 40)')

  function randomizeColor ():void {
    const r = Math.floor(Math.random() * (255 - 1));
    const g = Math.floor(Math.random() * (255 - 1));
    const b = Math.floor(Math.random() * (255 - 1));
    setBackgroundColor(`rgba(${r + ',' + g + ',' + b})`);
  }

  function spinIt () {
    setSpin(1);
    randomizeColor();
  };
  
  function unSpinIt () {
    setSpin(0);
  }

  return {spin, spinIt, unSpinIt, backgroundColor}
}