import { useState } from "react"

function App() {
   const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
       style={{backgroundColor: color}}>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center px-3 py-2 rounded-3xl gap-3 shadow-lg bg-white">
          <button className="outline-none rounded-full px-4 py-1 shadow-lg text-white" style={{backgroundColor:"red"}}
          onClick={() => setColor("red")}
          >Red</button>

          <button className="outline-none rounded-full px-4 py-1 shadow-lg text-white" style={{backgroundColor:"green"}}
          onClick={() => setColor("green")}
          >Green</button>

          <button className="outline-none rounded-full px-4 py-1 shadow-lg text-white" style={{backgroundColor:"blue"}}
          onClick={() => setColor("blue")}
          >Blue</button>

          <button className="outline-none rounded-full px-4 py-1 shadow-lg text-white" style={{backgroundColor:"gray"}}
          onClick={() => setColor("gray")}
          >Gray</button>

          <button className="outline-none rounded-full px-4 py-1 shadow-lg text-white" style={{backgroundColor:"maroon"}}
           onClick={() => setColor("maroon")}
          >Maroon</button>

          <button className="outline-none rounded-full px-4 py-1 shadow-lg text-white" style={{backgroundColor:"brown"}}
          onClick={() => setColor("brown")}
          >Brown</button>

          <button className="outline-none rounded-full px-4 py-1 shadow-lg text-white" style={{backgroundColor:"olive"}}
          onClick={() => setColor("olive")}
          >Olive</button>

          <button className="outline-none rounded-full px-4 py-1 shadow-lg text-white" style={{backgroundColor:"purple"}}
          onClick={() => setColor("purple")}
          >Purple</button>

          <button className="outline-none rounded-full px-4 py-1 shadow-lg text-white" style={{backgroundColor:"teal"}}
          onClick={() => setColor("teal")}
          >Teal</button>

          <button className="outline-none rounded-full px-4 py-1 shadow-lg text-white" style={{backgroundColor:"silver"}}
          onClick={() => setColor("silver")}
          >Silver</button>

         <button className="outline-none rounded-full px-4 py-1 shadow-lg text-white" style={{backgroundColor:"tomato"}}
          onClick={() => setColor("tomato")}
          >Tomato</button>

        </div>
      </div>
    </div>
  )
}

export default App
