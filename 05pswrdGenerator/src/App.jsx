import { useState , useCallback , useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState();

  //refhook- 
  const passRef = useRef(null)
  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator= useCallback(() => {
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers) str += "0123456789"
    if(characters) str += "!@#$%^&*+=_-"

    for(let i=1 ; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)
    
  } , [length , numbers, characters, setPassword])
  
  useEffect(() => {
    passwordGenerator()
  }, [length,numbers,characters,passwordGenerator])
  return (
    <>
      <div className='text-3xl  text-orange-400 text-center w-200 max-wd-md mx-auto shadow-md rounded-lg px-4 bg-gray-700'>
        <h1 className=' my-4 mx-4 text-white'>Password Generator</h1>
        <br/>
        <div className=' flex shadow rounded-lg overflow-hidden bg-white text-gray-800 w-full mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
           className='outline-none py-1 px-3 bg-blue-700 text-white'
          >copy</button>
        </div>
        <div className='flex text-2xl gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min="6"
            max="100"
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div> 
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numbers}
            id="numberInput"
            onChange={() => {
              setNumbers((prev) => !(prev));
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div> 
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={characters}
            id="characterInput"
            onChange={() => {
              setCharacters((prev) => !(prev));
            }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div> 
        </div>
        </div>
    </>
  )
}

export default App
