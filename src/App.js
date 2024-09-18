import logo from './logo.svg';
import './App.css';
import { FaPowerOff } from "react-icons/fa";
import {useState, useEffect} from "react";

function App() {
const [isOn, setIsOn] = useState(false);

const fetchLedStatus = async ()=>{
  try{
    const response = await fetch("https://iot-api-delta.vercel.app/led-status");
  if (response.ok) {
    // If the request was successful, toggle the LED status
    let status = await response.json();
    console.log(status);
    status = status.status;
    status = status === "off" ? false : true;
    console.log(status);
    setIsOn(status);
  } else {
    console.error("Failed to get LED status");
  }
  }catch(err){
    console.error("Failed to Fetch")
  }
  

}

const toggleOn = async () => {
  try {
    // Send the request to update the LED status
    const response = await fetch("https://iot-api-delta.vercel.app/update-led-status", {
      method: "POST", // assuming it's a POST request, change it if it's GET or other
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: isOn ? "off" : "on" }) // Send the correct status in the request
    });

    // Check if the request was successful
    if (response.ok) {
      // If the request was successful, toggle the LED status
      console.log(await response.json());
      setIsOn(!isOn);
    } else {
      console.error("Failed to update LED status");
    }
  } catch (error) {
    console.error("Error updating LED status:", error);
  }
};

useEffect(()=>{
  fetchLedStatus();
}, [])
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
