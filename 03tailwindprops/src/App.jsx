import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "devanshi",
    age: 18
  }
  let newArray = [1,2,3,4]

  return (
    <>
      <h1 className='bg-cyan-950 text-amber-50 p-5 rounded-2xl'>Tailwind Test</h1>
      <br/>
      <Card username="product1" btnText="click me" />
      <Card username="product2"/>
    </>
  )
}

export default App
