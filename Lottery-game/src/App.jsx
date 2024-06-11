import './App.css'
import Lottery from './Game'
import { sum } from './functions';

function App() {

let winCondition = (ticket) => {
return ticket.every((num) => num === ticket[0])
}

  return (
    <>
    <Lottery winCondition={winCondition}/>
    </>
  )
}

export default App
