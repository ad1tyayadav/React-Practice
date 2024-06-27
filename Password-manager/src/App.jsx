import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'

function App() {

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  let passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";

    if (charAllowed) str += "!@#$%^&*(){}?|<>";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed]);

  let passwordRef = useRef(null)

  let copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  

  useEffect(() => {
    passwordGenrator()
  }, [length, numberAllowed, charAllowed, passwordGenrator])

  return (
    <>
      <div className='w-full h-screen overflow-hidden bg-zinc-800'>
        <div className='absolute w-[50vw] translate-x-[50%] flex justify-center items-center rounded-xl mt-8 h-[30vh] bg-blue-900'>
        <div className='absolute top-8 w-full text-center'>
            <p className='text-white font-bold mb-4'>Password Generator</p>
          </div>
          <input
            className='outline-none text-zinc-900 px-3 w-[30vw] h-[5vh] rounded-2xl bg-zinc-300'
            type="text"
            id=''
            placeholder='Password'
            value={password}
            ref={passwordRef}
            readOnly />
          <button className='bg-purple-900 text-white font-semibold rounded-xl outline-none px-.5 py-2 ml-4 border-black border-solid border-2 w-12'
            onClick={copyToClipboard}>
            copy
          </button>

        </div>
        <div>
          <div className='flex gap-[2vw] relative translate-x-[33%] translate-y-[26vh]'>
            <input className=''
              id='passLength'
              min={6}
              max={20}
              value={length}
              onChange={(e) => {
                setLength(e.target.value)
              }}
              type="range" />
            <label className='relative text-orange-400 top-[-2px] text-white font-semibold' htmlFor="passLength">
              Length: {length}
            </label>
            <div className=''>
              <input type="checkbox"
                defaultChecked={numberAllowed}
                id='numInput'
                onClick={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label className='relative left-2 text-white font-semibold' htmlFor="numInput">Number</label>
            </div>
            <div>
              <input type="checkbox"
                defaultChecked={charAllowed}
                id='numInput'
                onClick={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label className='relative left-2 text-white font-semibold' htmlFor="numInput">Special</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
