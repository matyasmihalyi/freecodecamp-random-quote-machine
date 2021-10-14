import React from 'react';
import { Card } from './Card';
import { Circle } from './Circle';
import { useFetchQuote } from './quoteHook';
import { useAnimation } from './animationHook';


function App() {

  const {spin, spinIt, unSpinIt, backgroundColor} = useAnimation();
  
  const {quote, quotes, randomizeQuote} = useFetchQuote();

  const styleObj = {backgroundColor: backgroundColor, transition: "backGround 3s ease-out", zIndex: 1}
  
  return (
    <div className="container-fluid position-relative overflow-hidden" style={styleObj}>
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-grey100">
       {quote && <Card quote={quote} quotes={quotes} randomizeQuote={randomizeQuote} spinIt={spinIt}/>}
      </div>
      {quote && <Circle positionTop="30%" positionLeft="37%" size="20vh" spin={spin} unSpinIt={unSpinIt}/>}
      {quote && <Circle positionTop="40%" positionLeft="23%" size="27vh" spin={spin} unSpinIt={unSpinIt}/>}
      {quote && <Circle positionTop="50%" positionLeft="74%" size="35vh" spin={spin} unSpinIt={unSpinIt}/>}
      {quote && <Circle positionTop="26%" positionLeft="54%" size="12vh" spin={spin} unSpinIt={unSpinIt}/>}
      {quote && <Circle positionTop="60%" positionLeft="44%" size="19vh" spin={spin} unSpinIt={unSpinIt}/>}
    </div>
  );
}

export default App;
