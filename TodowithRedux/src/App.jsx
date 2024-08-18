import './App.css'
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {

  return (
    <div className='bg-gray-900 w-full h-screen'>
      <h1 className="text-3xl text-white  font-bold underline">
        Todo with React-Redux-Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
