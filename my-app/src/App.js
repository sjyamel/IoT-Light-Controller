import logo from './logo.svg';
import './App.css';
import { FaPowerOff } from "react-icons/fa";
import {useState} from "react";

function App() {
const [isOn, setIsOn] = useState(false);

const toggleOn = async ()=>setIsOn(!isOn);

  return (
    <div className="App">
      <header className="App-header">
        {isOn ? (
          <>
          <button onClick={toggleOn} className="p-12 bg-green-500 rounded-full text-white text-4xl m-2"> 
          <FaPowerOff/>
           </button>
           <input type="range"/>
           </>
        ):(
          <button onClick={toggleOn} className="p-12 bg-red-500 rounded-full text-white m-2 text-4xl"> 
          <FaPowerOff/>
           </button>
        )}
        
        
      </header>
    </div>
  );
}

export default App;
