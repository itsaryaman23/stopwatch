import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [intervalTracker, setIntervalTracker] = useState(-1);
  const [time, setTime] = useState(0);
  const format = (t)=>{
    const min = String(Math.floor(time/60));
    const sec = String(time%60).padStart(2,0);
    return `${min}:${sec}`;

  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {format(time)}</p>
      {
        intervalTracker==-1?
        <button onClick = {()=>{
          let t = setInterval(()=>{
            setTime(t=>t+1);
          },1000)
          setIntervalTracker(t);
        }}>Start</button>
        :
        <button onClick={()=>{
          clearInterval(intervalTracker);
          setIntervalTracker(-1);
        }}>Stop</button>

      }
      
      
      <button onClick={()=>{
        clearInterval(intervalTracker);
        setIntervalTracker(-1);
        setTime(0);
      }}>Reset</button>
    </div>
  );
}

export default App;
