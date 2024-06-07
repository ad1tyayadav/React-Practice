import './index.css'
import { useState } from 'react';

function App() {

  let [color, setColor] = useState("black")

  return (
    <div style={{ backgroundColor: color }} className='w-full flex justify-center h-screen'>
      <div className='w-[90vw] mt-4 fixed h-[9vh] border-2 text-white border-white-500 rounded-xl overflow-hidden flex justify-center gap-4 bg-slate-700'>
        <button onClick={() => setColor("red")} className='bg-red-600 btnbg'>Red</button>
        <button onClick={() => setColor("green")} className='bg-green-700 btnbg'>Green</button>
        <button onClick={() => setColor("blue")} className='bg-blue-800 btnbg'>Blue</button>
        <button onClick={() => setColor("black")} className='bg-zinc-900 btnbg'>Black</button>
        <button onClick={() => setColor("purple")} className='bg-purple-700 btnbg'>Purple</button>
        <button onClick={() => setColor("white")} className='bg-white text-black btnbg'>White</button>
        <button onClick={() => setColor("orange")} className='bg-orange-600 btnbg'>Orange</button>
        <button onClick={() => setColor("yellow")} className='bg-yellow-700 btnbg'>Yellow</button>
        <button onClick={() => setColor("pink")} className='bg-pink-600 btnbg'>Pink</button>
      </div>
    </div>
  );
}

export default App;
