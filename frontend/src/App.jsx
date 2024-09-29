import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createtodo } from './components/createTodo'
import { Todos } from './components/todos'

function App() {
  const [todos, setTodos] = useState([]);
  const [refresh , setRefresh] = useState(false);

  useEffect(()=>{
    fetch("http://localhost:3000/gettingTodo").then(async (res)=>{
      const data = await res.json();
      setTodos(data.todos);
    })

  } , [refresh])

  function todoAdded() {
    setRefresh(!refresh)
  }

  return (
    <div>
      <Createtodo></Createtodo>
      <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
