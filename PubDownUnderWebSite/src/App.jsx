import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './assets/Header/Header'




function App() {
  const [count, setCount] = useState(0)
  
  const handleButtonClick = (buttonName) => {
    console.log(buttonName);

  };
  return (
    <>
        <Header onButtonClick={handleButtonClick}/>
        <Outlet />
    </>
  )
}

export default App
