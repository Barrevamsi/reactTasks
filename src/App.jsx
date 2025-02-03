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
import InfinetScrollTask from './infinetScroll/infinetScroll'
import InfinetS from './Tasks/infinetS'
import GetValue from './useContext/getValue'
import Context from './useContext/constext'
import FocusInput from './useRef\'/useRef'
import CounterApp from './counterUseref/useRefC'
import Dashboard from './student Dashboard/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Parent/> */}
     {/* <Form/> */}
     {/* <Counter/> */}
     {/* <AppA/> */}
     {/* <ToDo/> */}
     {/* <Api/> */}
     {/* <InfinetScrollTask/> */}
     {/* <InfinetS/> */}
     {/* <Context/>
     <GetValue/> */}
     {/* <FocusInput/> */}
     {/* <CounterApp/> */}
     


    </>
  )
}

export default App
