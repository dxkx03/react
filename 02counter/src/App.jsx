import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter , setCounter] = useState(15)


  //let counter = 15
  const addvalue = () =>{
    console.log("clicked", counter);
    //counter = counter + 1 ; 
    setCounter(counter + 1);
  }
 
  const decreasevalue = () =>{
    console.log("decrease", counter);
    //counter= counter - 1;
    setCounter(counter - 1);
  }


  return (
    <>
     <h1>PROJECT 2 </h1>
     <h2>counter value: {counter} </h2>
     <button 
     onClick={addvalue}
     > Add value to {counter}</button>
     <br/>
     <button
     onClick={decreasevalue}
     >Decrease value from {counter}</button>
     <p>footer : {counter} </p>
    </>
  )
}

export default App
