import { useState } from "react" 
import { Navbar } from "./components/Navbar";

function App() {
  let [counter , setCounter] = useState(0);
  const increment = () => {
     setCounter(counter => counter+1)
  }
  const decrement = () => {
    setCounter(counter => counter-1)
  }

  return (
    <>
     <Navbar/>
      <div className="p-40">
      <h1 className="text-[2rem]">React practice</h1>
      <h2 className="py-2 font-bold text-[2.5rem]">{counter}</h2>
      <button className="border px-4 py-2 mr-2 rounded" onClick={increment} disabled={counter ===20 && true}>Increment</button>
      <button className="border px-4 py-2 rounded" onClick={decrement} disabled={counter === 0 && true}>Decrement</button>
      </div>
    </>
  )
}

export default App
