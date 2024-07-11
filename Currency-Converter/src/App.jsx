import { useState } from 'react'
import Card from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-zinc-800 w-full h-screen flex flex-col justify-center items-center '>
      <h2 className='text-orange-800 text-[6rem] font-bold relative bottom-32'>USD to INR</h2>
      <Card />
    </div>
  )
}

export default App
