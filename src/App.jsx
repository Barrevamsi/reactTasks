import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Parent from './props/parent'
import Form from './conditional rendering/form'
import Count from './counter/count'
import Counter from './Tasks/count'
import AppA from './darktheme/dark'
import ToDo from './toDo/toDo'
import Api from './api/apicalling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Parent/> */}
     {/* <Form/> */}
     {/* <Counter/> */}
     {/* <AppA/> */}
     {/* <ToDo/> */}
     <Api/>
    </>
  )
}

export default App
