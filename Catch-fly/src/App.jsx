import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const fly = useRef();
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(0);
  const [animation, setAnimation] = useState(0);

  const randomX = () => gsap.utils.random(-100, 300, 100);
  const randomY = () => gsap.utils.random(-300, 300, 80);
  const rotate = () => gsap.utils.random(-360, 360, 50);

  const handleSubmit = () => {
    setValueX(randomX());
    setValueY(randomY());
    setAnimation(rotate());
    head.innerText = ''
  };

  const head = document.getElementById("heading")

  useEffect(() => {
    if (valueX || valueY || animation) {
      gsap.to(fly.current, {
        x: valueX,
        y: valueY,
        rotate: animation,
        duration: 0.6,
        ease: "slow(0.7, 0.7)",
      });
    }
  }, [valueX, valueY, animation]);

  return (
    <>
      <div>
        <header id='heading'>
          <h3>Hai himmat? to pakad ke dikha!</h3>
          <p>Kripya dhyan de agar makkhi screen se bahar nikal jaye to page ko <b>Refresh</b> kar le!</p>
        </header>
        <main>
          <img src='public\fly.svg' onClick={handleSubmit} ref={fly} className="fly"></img>
        </main>
      </div>
    </>
  );
}

export default App;
