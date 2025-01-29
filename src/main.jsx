import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import Count from './counter/count.jsx';
import ToDo from './toDo/toDo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Count/> */}
    {/* <ToDo/> */}
  </StrictMode>
)
